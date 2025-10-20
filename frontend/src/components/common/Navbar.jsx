// src/components/common/Navbar.jsx

import React from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Import useAuth

const Navbar = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth(); // Get token and logout function

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleNavClick = (item) => {
    switch (item) {
      case "Home":
        navigate("/");
        break;
      case "Shop":
        navigate("/shop");
        break;
      case "Virtual Try-On":
        navigate("/virtual-try-on");
        break;
      case "About":
        navigate("/about");
        break;
      case "Contact":
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="w-full sticky top-0 z-50 flex flex-col font-display text-gray-100"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <header className="bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h2
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            Estorex
          </h2>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-gray-200 text-sm">
            {["Home", "Shop", "Virtual Try-On", "About", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="hover:text-pink-400 transition-colors duration-300 bg-transparent border-none cursor-pointer"
                >
                  {item}
                </button>
              )
            )}
          </nav>

          {/* Right-side Buttons (Cart & Auth) */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleCheckout}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              <ShoppingCart size={20} />
            </button>

            {/* --- AUTH LOGIC --- */}
            {token ? (
              // --- IF LOGGED IN ---
              <button
                onClick={logout}
                // --- THIS IS THE CHANGED LINE ---
                className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg text-sm font-medium text-white transition"
              >
                Logout
              </button>
            ) : (
              // --- IF LOGGED OUT ---
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg text-sm font-medium text-white transition"
                >
                  Sign Up
                </button>
              </>
            )}
            {/* --- END OF AUTH LOGIC --- */}
            
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;