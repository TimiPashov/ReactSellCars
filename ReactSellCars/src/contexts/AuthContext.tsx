import { createContext, useState, ReactNode, useContext } from "react";
import { getProfile, login } from "../services/userService";

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
    await login(data.email, data.password);
    const user = await getProfile();
    setUser(user);
    setEmail("");
    setPassword("");
  }

  // useEffect(() => {
  //   getProfile().then((data) => setUser(data));
  // }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, onLoginSubmit }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
