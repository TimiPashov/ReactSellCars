import { createContext, useState, ReactNode, useContext } from "react";
import { getProfile, login, logout } from "../services/userService";

export const AuthContext = createContext({});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({});

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
      value={{ user, setUser, onLoginSubmit, onLogoutSubmit }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
