import Navbar from "./Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";

import HotEspresso from "./pages/HotEspresso";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Navbar stays on top */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hot-espresso" element={<HotEspresso />} />
        <Route path="/location" element={<Location />} />
      </Routes>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#222",
          color: "white",
        }}
      >
        © 2026 Brew Haven Cafe | All Rights Reserved
      </footer>
    </>
  );
}

export default App;