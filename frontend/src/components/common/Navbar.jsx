import React from "react";
import { Instagram, Twitter, Facebook, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Cardmain from "../Animated/Cardmain";

const Navbar = ()=>{
    const navigate = useNavigate();
    
    const handleCheckout = () => {
        navigate("/cart");
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
        className="w-full fixed flex flex-col font-display text-gray-100 mb-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* HEADER */}
        <header className="top-0 z-50 relative bg-black/40 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h2
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Estorex
            </h2>

            {/* Navbar */}
            <nav className="hidden md:flex gap-8 text-gray-200 text-sm">
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

            {/* Cart Button */}
            <button
              onClick={handleCheckout}
              className="px-3 py-1 border border-gray-400 rounded-lg text-sm hover:bg-white/10 transition"
            >
              <ShoppingCart />
            </button>
          </div>
        </header>
        {/* <Cardmain></Cardmain>/ */}
      </div>
    );
}

export default Navbar;