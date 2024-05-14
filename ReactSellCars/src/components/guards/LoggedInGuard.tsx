import { Navigate, Outlet } from "react-router-dom";
import { User } from "../../types/Auth";

export default function LoggedInGuard() {
  const user: User = JSON.parse(localStorage.getItem("user")!);

  if (user != undefined && user._id) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}
