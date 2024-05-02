import { BASE_URL } from "../environments/environment";

export async function getAllCars() {
    const response = await fetch(`${BASE_URL}/cars`);
    const cars = await response.json();
    return cars
    
}

