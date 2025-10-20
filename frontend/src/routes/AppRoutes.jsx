// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/cart";
import Shop from "../pages/Shop";
import VirtualTryOnPage from "../pages/VirtualTryOn";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PaymentPage from "../pages/Checkout";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/virtual-try-on" element={<VirtualTryOnPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<PaymentPage />} />
    </Routes>
  );
}
