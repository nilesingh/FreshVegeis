import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Accessories from "./pages/Accessories";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Wholesale from "./pages/Wholesale";
import Return from "./pages/Return";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Footer Pages */}
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/return" element={<Return />} />
        <Route path="/wholesale" element={<Wholesale />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;