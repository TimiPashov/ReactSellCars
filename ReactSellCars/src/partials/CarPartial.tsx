// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Car } from "../types/Car";


export default function CarPartial({ car }: { car: Car }) {
    return (
        <div className="p-5 border rounded-2xl shadow-md inline-block">
            <Link to={`/cars/${car._id}`} className="text-2xl font-fira-code">{car.make} - {car.model}</Link>
            <p className="text-lg font-fira-sans">{car.year}</p>
            <p className="text-lg font-fira-sans">{car.fuelType}</p>
            <p className="text-lg font-fira-sans">Price: ${car.price}</p>
        </div>

    )
}