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
    <div className="mt-14 flex flex-col flex-wrap gap-10">
      <h1 className="text-3xl font-bold self-center">Catalog</h1>
      <div className="flex gap-4">
        {result.map((car) => (
          <CarPartial key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
}
