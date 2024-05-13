import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { User } from "../../types/Auth";

export default function Nav() {
  const { onLogoutSubmit } = useAuthContext() as {
    onLogoutSubmit: () => Promise<void>;
  };
  const { user } = useAuthContext() as { user: User };

  return (
    <div>
      <ul className="flex gap-4 justify-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cars">Catalog</NavLink>
        </li>
        {user._id && (
          <>
            <li>
              <NavLink to="/add-car">Add Car</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={onLogoutSubmit}>
                Logout
              </NavLink>
            </li>
          </>
        )}
        {!user._id && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
