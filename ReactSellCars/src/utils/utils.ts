import { User } from "../types/Auth";

export function setUserLocalStorage(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}
