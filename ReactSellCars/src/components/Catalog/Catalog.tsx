import { useEffect, useState } from "react";
import { useCarContext } from "../../contexts/CarContext";
import { Car } from "../../types/Car";
import CarPartial from "../../partials/CarPartial";


export default function Catalog() {
  const [result, setResult] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  const { cars } = useCarContext();

  // console.log('from catalog')

  useEffect(() => {
    setResult(cars);
    setLoading(false);
  }, [cars]);

  
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1 className="text-3xl font-bold font-fira-code">Catalog</h1>
      <div>
        {result.map((car) => (
          <CarPartial key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
}
