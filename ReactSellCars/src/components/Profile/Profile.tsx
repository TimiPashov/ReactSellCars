import { useAuthContext } from "../../contexts/AuthContext";
import { User } from "../../types/Auth";

export default function Profile() {
  const { user } = useAuthContext() as { user: User };


  return (
    <div>
      <h1 className="text-3xl font-bold font-fira-code">Profile</h1>
      <div>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Posted Cars Count: {user.cars?.length}</p>
      </div>
    </div>
  );
}
