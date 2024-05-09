// import { useEffect } from "react";
// import { getProfile } from "../../services/userService";

import { useAuthContext } from "../../contexts/AuthContext";
import { User } from "../../types/Auth";

export default function Profile() {
  const { user } = useAuthContext() as { user: User };
  console.log(user);

  return (
    <div>
      <h1 className="text-3xl font-bold font-fira-code">Profile</h1>
      <div>
        <p>Profile content</p>
      </div>
    </div>
  );
}
