import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Nav() {
  const { onLogoutSubmit } = useAuthContext() as {
    onLogoutSubmit: () => Promise<void>;
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cars">Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="#" onClick={onLogoutSubmit}>
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
