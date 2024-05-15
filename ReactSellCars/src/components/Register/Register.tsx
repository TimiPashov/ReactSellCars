import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { RegisterSubmit } from "../../types/Auth";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState<{ error: string }>({ error: "" });
  const { onRegisterSubmit } = useAuthContext() as RegisterSubmit;

  return (
    <div className="mt-28 flex flex-col items-center h-auto">
      <h1>Register</h1>
      <form className="mt-4 flex flex-col gap-4 w-1/4">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className={`form-input ${
            error.error && error.error.toLowerCase().includes("username")
              ? "border-red-500"
              : ""
          }`}
        />
        {error.error && error.error.toLowerCase().includes("username") && (
          <>
            <p className="text-red-500 text-xs">{error.error}</p>
          </>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`form-input ${
            error.error && error.error.toLowerCase().includes("email")
              ? "border-red-500"
              : ""
          }`}
        />
        {error.error && error.error.toLowerCase().includes("email") && (
          <>
            <p className="text-red-500 text-xs">{error.error}</p>
          </>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`form-input ${
            error.error && error.error.toLowerCase().includes("password")
              ? "border-red-500"
              : ""
          }`}
        />
        {error.error && error.error.toLowerCase().includes("password") && (
          <>
            <p className="text-red-500 text-xs">{error.error}</p>
          </>
        )}
        <label htmlFor="re-password">Re-Password</label>
        <input
          type="password"
          id="re-password"
          name="re-password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          className={`form-input ${
            error.error && error.error.toLowerCase().includes("password")
              ? "border-red-500"
              : ""
          }`}
        />
        <button
          type="submit"
          onClick={(e) => {
            onRegisterSubmit(
              e,
              { userName, email, password, rePassword },
              setUserName,
              setPassword,
              setRePassword,
              setError
            );
          }}
          className="form-button"
        >
          Register
        </button>
      </form>
    </div>
  );
}
