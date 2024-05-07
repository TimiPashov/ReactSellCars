// import { useEffect, useState } from "react";
import { Car } from "../types/Car";


export default function CarPartial({ car }: { car: Car }) {
    return (
        <h2 className="text-2xl font-bold font-fira-code">{car.make} {car.model}</h2>

    )
}