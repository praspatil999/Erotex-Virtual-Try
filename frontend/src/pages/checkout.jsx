import React, { useState, useEffect } from "react";

export default function CartPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  return (
    // CHANGE: Removed 'font-[Space_Grotesk]' from this line
    <div className="flex min-h-screen flex-col bg-[#0e0e0e] text-white">

      {/* Main */}
      <main className="flex-1 px-4 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Your Shopping Cart 🛍️
          </h1>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl bg-[#1a1a1a]/80 p-4 backdrop-blur-md border border-white/10 hover:border-[#7f13ec]/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-16 w-16 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.size}</p>
                  </div>
                </div>
                <p className="font-semibold text-[#ff007f]">{item.price}</p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-10 rounded-2xl bg-[#1a1a1a]/80 p-6 border border-white/10 backdrop-blur-md">
            <h2 className="mb-4 text-xl font-bold text-white">Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>$260</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between text-lg font-bold text-white">
                <span>Total</span>
                <span>$260</span>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="mt-10 flex justify-center">
            <button className="flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#ff007f] to-[#7f13ec] px-8 text-base font-bold text-white shadow-lg shadow-[#7f13ec]/40 transition-transform hover:scale-105">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// Mock Data
const cartItems = [
  {
    name: "Techwear Jacket",
    size: "Size M",
    price: "$120",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEFWOP-tgFLsUrSR-3wtdux167McSsBXvjdhitd7gEk69nLpAP7KZgJMg_3XxgizV4NzPbl4l57SCBrdm4YRRcWTuZQvklRw43CY_eff9MNgAliE6EV8U7_LhCLfoID_T5W2s6oQZgtlXJ0x9yx1hbpqG4Atrd3XETdeJuaEB4WMPmzpxgOs1o6bAfCYjbd_cHkUWrmQDHyR35oNW9z4rQ1L9IKwAe_u4KcJfd0ij6M25wORy255GHMbG64hgBiTFxv8Q4zZLWC9s",
  },
  {
    name: "Cyberpunk Pants",
    size: "Size L",
    price: "$80",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgVxu98g4GXTz0UQhldDMH6r3mby_hBtpDfN73LBohdOcaqdGkiNgYX8r36LwMd3BWkIW_pluMuicMUeomAM33f5pqpK4-Gk4d21EJMok8sHD-MFs31D1BDYHXCSE3FLsHYbX7vl0M4gFGdG_mGhyy1y94Z60t_NFL8t1l_1qhauue5KC2ZP5k3Vo_njTxJNDaT6mgAjBWVsNIDVvdEp-Yr3w5y1vTfY0Ye2bsPExxL6shBJif3RpyfVQQOcEFm4gXLb3RIqLSDEA",
  },
  {
    name: "Neon Hoodie",
    size: "Size S",
    price: "$60",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWC8pRaN7ZMATvwj60SNM51vNY-CCemb44DI3WFyJraC1wml2roI9N6aduX_-lla499t7NimVok5GaKpHqxiGHo5_BY0_LFvnSMKLU-TjtTy43-hZPUknn7wG6L-YWUbiaKIB3PUkrpOQwtOu636FlwJb5rCm4fhS5Hn4wUDLWxVIEXXvheI7uspdf11ADj1AF0QwnIBqbd01Uz_yyDtBYn2Y1S-6Ri2OizwVP8m-894wfZc23E25wG1vqv44h80H-2Lv5lZxKMkA",
  },
];

// Icons
const searchIcon = `<svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>`;
const profileIcon = `<svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>`;
const cartIcon = `<svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path></svg>`;