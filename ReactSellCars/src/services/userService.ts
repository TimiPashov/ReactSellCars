import { BASE_URL } from "../environments/environment";

export async function login(username: string, password: string) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  document.cookie = `token=${data.token}`;
  return data;
}

export async function getProfile() {
  const response = await fetch(`${BASE_URL}/auth/profile`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Cookie: document.cookie,
    },
    credentials: "include",
  });
  const data = await response.json();
  return data;
}
