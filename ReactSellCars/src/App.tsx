import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
      <div className="p-28">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<h1>Cars</h1>} />
        </Routes>
      </div>

  );
}

export default App;
