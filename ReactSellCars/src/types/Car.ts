export type Car = {
  _id: string;
  make: string;
  model: string;
  year: string;
  used: string;
  coupe: string;
  fuelType: string;
  description: string;
  price: string;
  owner: string;
  images: string;
  __v: number;
};

export type CreateCar = {
  make: string;
  model: string;
  year: string;
  used: string;
  coupe: string;
  fuelType: string;
  description: string;
  price: string;
  images: string;
};
