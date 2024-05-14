import { User } from "../../types/Auth";
import { Car } from "../../types/Car";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCarContext } from "../../contexts/CarContext";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Details() {
  const { cars } = useCarContext() as { cars: Car[] };
  const { user } = useAuthContext() as { user: User };
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
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Details</h1>
      <h2>{car.make}</h2>
      <h3>{car.model}</h3>
      <p>{car.year}</p>
      <p>{car.fuelType}</p>
      <p>Price: ${car.price}</p>
      <p>{car.description}</p>
      {user._id && (
        <div>
          {user._id === car.owner ? (
            <div>
              <button>Edit</button>
              <button>Delete</button>
              <button>Mark as Sold</button>
            </div>
          ) : (
            <div>
              <button>Buy</button>
              <button>Contact Seller</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
