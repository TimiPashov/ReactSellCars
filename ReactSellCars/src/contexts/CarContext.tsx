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

const CarContext = createContext({});
const URL_PATTERN = /^https?:\/\/.+$/i;

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
    data: Car,
    setError: React.Dispatch<
      React.SetStateAction<{ error: string; fields: string[] }>
    >
  ): Promise<void> {
    e.preventDefault();
    const fields: string[] = [];

    for (const [key, value] of Object.entries(data)) {
      if (!value) {
        fields.push(key);
      }
    }
    setError({ error: "All fields are required", fields });
    if (fields.length > 0) {
      return;
    }

    // if (Object.entries(data).some(([key, value]) => value === "")) {
    //   setError({ error: "All fields are required" });
    //   return;
    // }
    if (!URL_PATTERN.test(data.images)) {
      setError({ error: "Invalid image URL", fields: [] });
      return;
    }
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
