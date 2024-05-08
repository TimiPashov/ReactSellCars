import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { LoginSubmit } from "../../types/Auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLoginSubmit } = useAuthContext() as LoginSubmit;
  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          onLoginSubmit(e, { email, password }, setEmail, setPassword);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
