// import { useEffect } from "react";
// import { getProfile } from "../../services/userService";

import { useAuthContext } from "../../contexts/AuthContext";
import { User } from "../../types/Auth";

export default function Profile() {
  const { user } = useAuthContext() as { user: User };

    if(!user.username){
        return<div><h2>Not logged In</h2></div>
    }
  return (
    <div>
      <h1 className="text-3xl font-bold font-fira-code">Profile</h1>
      <div>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Posted Cars Count: {user.cars.length}</p>
      </div>
    </div>
  );
}
