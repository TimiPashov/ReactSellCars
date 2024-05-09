import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { LoginSubmit } from "../../types/Auth";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { onLoginSubmit } = useAuthContext() as LoginSubmit;
  return (
    <div className="mt-28 flex flex-col items-center h-auto ">
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          onLoginSubmit(
            e,
            { email: userName, password },
            setUserName,
            setPassword
          );
        }}
        className="mt-4 flex flex-col gap-4 w-1/4"
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username "
          className="border"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
