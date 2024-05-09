import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { User } from "../../types/Auth";

export default function LoggedInGuard() {
  const { user } = useAuthContext() as { user: User };
  if (!user._id) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
