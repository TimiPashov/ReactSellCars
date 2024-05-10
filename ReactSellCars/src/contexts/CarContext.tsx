import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { createCar, getAllCars } from "../services/carService";
import { Car } from "../types/Car";
import { useNavigate } from "react-router-dom";

// interface CarContextProps {
//   cars: Car[];
//   setCars: React.Dispatch<React.SetStateAction<Car[]>>;
//   onCreateCarSubmit: (e: React.FormEvent<EventTarget>, data: Car) => Promise<void>;
// }

const CarContext = createContext({});

export function CarProvider({ children }: { children: ReactNode }) {
  const [cars, setCars] = useState<Car[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cars.length === 0) {
      getAllCars().then((data) => {
        setCars(data);
      });
    }
  });

  async function onCreateCarSubmit(
    e: React.FormEvent<EventTarget>,
    data: Car
  ): Promise<void> {
    e.preventDefault();
    const car = await createCar(data);
    setCars([...cars, car]);
    navigate("/cars/" + car._id);
  }

  return (
    <CarContext.Provider value={{ cars, setCars, onCreateCarSubmit }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCarContext() {
  const context = useContext(CarContext);

  if (!context) {
    throw new Error("useCarContext must be used within a CarProvider");
  }
  return context;
}
