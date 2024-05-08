import { useEffect, useState } from "react";
import { Car } from "../../types/Car";
import { useParams } from "react-router-dom";
// import { getCarById } from "../../services/carService";
import { useCarContext } from "../../contexts/CarContext";

export default function Details() {
const {cars} = useCarContext();  
const [car, setCar] = useState<Car>({} as Car);
const [loading, setLoading] = useState(true);
const { id } = useParams();
useEffect(() => {
    const result = cars.find((car) => car._id === id);
    if (result) {
        setCar(result);
        setLoading(false);
    }
}, [id, cars]);
if(loading) return <h1>Loading...</h1>
  return (
    <div>
      <h1>Details</h1>
        <h2>{car.make}</h2>
        <h3>{car.model}</h3>
        <p>{car.year}</p>
        <p>{car.fuelType}</p>
        <p>Price: ${car.price}</p>
        <p>{car.description}</p>
    </div>
  );
}
