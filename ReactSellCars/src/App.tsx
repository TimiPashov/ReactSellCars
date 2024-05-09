import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import { CarProvider } from "./contexts/CarContext";
import Login from "./components/Login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="p-16 h-screen">
      <AuthProvider>
        <CarProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Catalog />} />
            <Route path="/cars/:id" element={<Details />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </CarProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
