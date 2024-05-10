import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getAllCars } from "../services/carService";
import { Car } from "../types/Car";

interface CarContextProps {
  cars: Car[];
  setCars: React.Dispatch<React.SetStateAction<Car[]>>;
}

const CarContext = createContext<CarContextProps | null>(null);

export function CarProvider({ children }: { children: ReactNode }) {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    if (cars.length === 0) {
      getAllCars().then((data) => {
        setCars(data);
      });
    }
  });

  return (
    <CarContext.Provider value={{ cars, setCars }}>
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
