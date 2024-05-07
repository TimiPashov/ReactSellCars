import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <div className="p-28">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
