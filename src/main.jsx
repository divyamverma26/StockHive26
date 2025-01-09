import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Landing_Page/Home/HomePage.jsx";
import SignUp from "./Landing_Page/Signup/SignUp.jsx";
import About from "./Landing_Page/About/About.jsx";
import Product from "./Landing_Page/Products/Product.jsx";
import Pricing from "./Landing_Page/Pricing/Pricing.jsx";
import Support from "./Landing_Page/Support/Support.jsx";
import Navbar from "./Landing_Page/Navbar.jsx";
import Footer from "./Landing_Page/Footer.jsx";
import NotFound from "./Landing_Page/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="StockHive26" element={<HomePage />} />
      <Route path="StockHive26/signup" element={<SignUp />} />
      <Route path="StockHive26/about" element={<About />} />
      <Route path="StockHive26/product" element={<Product />} />
      <Route path="StockHive26/pricing" element={<Pricing />} />
      <Route path="StockHive26/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
