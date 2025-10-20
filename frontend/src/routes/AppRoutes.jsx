// src/routes/AppRoutes.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

// Your existing pages
import Home from "../pages/Home";
import CartPage from "../pages/checkout";
import Shop from "../pages/Shop";
import VirtualTryOn from "../pages/VirtualTryOn";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AboutPage from "../pages/About";

// --- 1. THIS IS THE FIX ---
// Your file is "Contact.jsx", so import "Contact"
import ContactPage from "../pages/Contact"; 
// --- END OF FIX ---

// (I also removed the unused 'import { Contact } from "lucide-react"')

export default function AppRoutes() {
  return (
    <main className="pt-20 bg-neutral-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CartPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/virtual-try-on" element={<VirtualTryOn />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}