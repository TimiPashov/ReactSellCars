import { createContext, useState, ReactNode, useContext } from "react";

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
    console.log(data);
    setEmail("");
    setPassword("");
  }

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
