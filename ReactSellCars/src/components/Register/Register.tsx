import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { RegisterSubmit } from "../../types/Auth";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { onRegisterSubmit } = useAuthContext() as RegisterSubmit;

  return (
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border"
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
        <label htmlFor="re-password">Re-Password</label>
        <input
          type="password"
          id="re-password"
          name="re-password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          className="border"
        />
        <button
          type="submit"
          onClick={(e) => {
            onRegisterSubmit(
              e,
              { userName, email, password, rePassword },
              setUserName,
              setPassword,
              setRePassword
            );
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
