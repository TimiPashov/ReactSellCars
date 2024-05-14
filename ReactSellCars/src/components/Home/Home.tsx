import { useAuthContext } from "../../contexts/AuthContext";
import { User } from "../../types/Auth";

export default function Home() {
  const { user } = useAuthContext() as { user: User };
  return (
    <div className="h-auto w-2/3 flex flex-col items-center self-center gap-4">
      <h1 className="text-3xl font-bold">Welcome to SellCars Online Shop</h1>
      <p className="text-lg text-center">
        You can browse our catalog of cars, or add your own car for sale.
      </p>
      <p className="text-lg text-center">
        As a guest, you can browse our extensive catalog of cars available for
        sale. Find the perfect car that suits your needs and preferences.
      </p>
      <p className="text-lg text-center">
        If you become a registered user, you can not only browse, but also buy
        cars from our online shop. Additionally, you can sell your own car by
        listing it on our platform.
      </p>
      {!user._id && (
        <div>
          <p className="text-lg text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400">
              Login
            </a>
          </p>
          <p className="text-lg text-center">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-400">
              Register
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
