import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import { CarProvider } from "./contexts/CarContext";
import Login from "./components/Login/Login";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="p-28">
      <AuthProvider>
        <CarProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Catalog />} />
            <Route path="/cars/:id" element={<Details />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </CarProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
