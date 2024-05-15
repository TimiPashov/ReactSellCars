import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { LoginSubmit } from "../../types/Auth";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{ error: string }>({ error: "" });
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
            setPassword,
            setError
          );
        }}
        className="mt-4 flex flex-col gap-4 w-1/4"
      >
        <label htmlFor="username" className="text-sm">Username</label>
        <input
          type="text"
          id="username"
          name="username "
          className={`form-input ${error.error ? "border-red-500" : ""}`}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {error.error && <p className="text-red-500 text-xs">{error.error}</p>}
        <label htmlFor="password" className="text-sm">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`form-input ${error.error ? "border-red-500" : ""}`}
        />
        <button type="submit" className="form-button">Login</button>
      </form>
    </div>
  );
}
