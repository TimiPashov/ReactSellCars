import { useEffect, useState } from "react"
import { useCarContext } from "../../contexts/CarContext"
import { Car } from "../../types/Car"


export default function Catalog() {
    const [result,setResult] = useState<Car[]>([]) // Update the initial state to be an empty array of type Car[]
    const {cars} = useCarContext()

    useEffect(() => {
        setResult(cars)
    },[cars])
    return (
        <div>
            <h1 className='text-3xl font-bold font-fira-code'>Catalog</h1>
            {result.map((car) => (
                <div key={car._id}>
                    <h2>{car.make}</h2>
                    <p>{car.model}</p>
                    <p>{car.year}</p>
                    {/* Add more car details here */}
                </div>
            ))}
        </div>
    )
}