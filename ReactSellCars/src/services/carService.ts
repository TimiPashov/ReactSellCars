import { BASE_URL } from "../environments/environment";
import { Car } from "../types/Car";


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
