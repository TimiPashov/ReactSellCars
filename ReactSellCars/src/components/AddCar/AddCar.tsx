import { useState } from "react";
import { useCarContext } from "../../contexts/CarContext";
import { CreateCar } from "../../types/Car";

export default function AddCar() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [used, setUsed] = useState("used");
  const [coupe, setCoupe] = useState("sedan");
  const [fuelType, setFuelType] = useState("gasoline");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState("");

  const { onCreateCarSubmit } = useCarContext() as {
    onCreateCarSubmit: (
      event: React.FormEvent<HTMLFormElement>,
      data: CreateCar
    ) => void;
  };

  return (
    <div className="mt-20 flex flex-col items-center h-auto ">
      <h1>Add Car</h1>
      <form
        onSubmit={(e) => {
          onCreateCarSubmit(e, {
            make,
            model,
            year,
            used,
            coupe,
            fuelType,
            description,
            price,
            images,
          });
        }}
        className="mt-4 w-1/3 flex flex-col gap-2 text-xs"
      >
        <label htmlFor="make">Make:</label>
        <input
          type="text"
          id="make"
          name="make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="form-input"
        />

        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="form-input"
        />

        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="form-input"
        />

        <label htmlFor="used">Used:</label>
        <select
          id="used"
          name="used"
          value={used}
          onChange={(e) => setUsed(e.target.value)}
          className="form-input flex"
        >
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>

        <label htmlFor="coupe">Coupe:</label>
        <select
          id="coupe"
          name="coupe"
          value={coupe}
          onChange={(e) => setCoupe(e.target.value)}
          className="form-input flex"
        >
          <option value="sedan">Sedan</option>
          <option value="hatchback">Hatchback</option>
        </select>

        <label htmlFor="fuelType">Fuel Type:</label>
        <select
          id="fuelType"
          name="fuelType"
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          className="form-input flex"
        >
          <option value="gasoline">Gasoline</option>
          <option value="diesel">Diesel</option>
          <option value="electrical">Electrical</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
        ></textarea>

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-input"
        />

        <label htmlFor="images">Image:</label>
        <input
          type="text"
          id="images"
          name="images"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          className="form-input"
        />
        <button className="form-button">Submit</button>
      </form>
    </div>
  );
}
