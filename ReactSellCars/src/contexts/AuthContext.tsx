import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { getProfile, login, logout, register } from "../services/userService";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getProfile();
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  async function onLoginSubmit(
    e: React.FormEvent<EventTarget>,
    data: { email: string; password: string },
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>
  ): Promise<void> {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      const user = await getProfile();
      setUser(user);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function onRegisterSubmit(
    e: React.FormEvent<EventTarget>,
    data: {
      userName: string;
      email: string;
      password: string;
      rePassword: string;
    },
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setRePassword: React.Dispatch<React.SetStateAction<string>>
  ) {
    e.preventDefault();
    try {
      await register(data.userName, data.email, data.password, data.rePassword);
      const user = await getProfile();
      setUser(user);
      setEmail("");
      setPassword("");
      setRePassword("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function onLogoutSubmit(): Promise<void> {
    try {
      setUser({});
      await logout();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, onLoginSubmit, onLogoutSubmit, onRegisterSubmit }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
