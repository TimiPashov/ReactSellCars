import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import { CarProvider } from "./contexts/CarContext";

function App() {
  return (
    <div className="p-28">
      <CarProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Catalog />} />
          <Route path="/cars/:id" element={<Details />} />
        </Routes>
      </CarProvider>
    </div>
  );
}

export default App;
