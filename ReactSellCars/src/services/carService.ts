import { BASE_URL } from "../environments/environment";
import { Car } from "../types/Car";


export async function getAllCars() {
    console.log('fetching cars');
    
  const response = await fetch(`${BASE_URL}/cars`);
  const cars: Car[] = await response.json();
  return cars;
}
