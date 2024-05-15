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
  if (data.error) {
    throw data;
  }
  document.cookie = `token=${data.token}`;
  return data;
}

export async function register(
  username: string,
  email: string,
  password: string,
  rePassword: string
) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password, rePassword }),
  });

  const data = await response.json();
  if (data.error) {
    if(data.error.includes('User validation failed')){
      data.error = 'Invalid email!';  
    }
    throw data;
  }
  document.cookie = `token=${data.token}`;
  return data;
}

export async function logout() {
  await fetch(`${BASE_URL}/auth/logout`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Cookie: document.cookie,
    },
    credentials: "include",
  });
}

export async function getProfile() {
  const token = document.cookie.split("=")[1];

  if (token !== undefined) {
    const response = await fetch(`${BASE_URL}/auth/profile`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Cookie: document.cookie,
      },
      credentials: "include",
    });
    if (response.status === 401) {
      return undefined;
    }
    const data = await response.json();

    return data;
  }
}
