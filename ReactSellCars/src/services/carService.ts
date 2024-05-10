import { BASE_URL } from "../environments/environment";
import { Car, CreateCar } from "../types/Car";

export async function getAllCars() {
  const response = await fetch(`${BASE_URL}/cars`);
  const cars: Car[] = await response.json();
  return cars;
}

export async function getCarById(id: string) {
  const response = await fetch(`${BASE_URL}/cars/${id}`);
  const car: Car = await response.json();
  return car;
}

export async function createCar(data: CreateCar) {
  const response = await fetch(`${BASE_URL}/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: document.cookie,
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  const car: Car = await response.json();
  return car;
}
