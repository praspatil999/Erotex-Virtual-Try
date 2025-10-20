import React, { useState, useEffect } from "react";
import { Heart, ShoppingCart, Filter, X } from "lucide-react";
import axios from "axios"; // Import axios

const ShopPage = () => {
  // State for filters remains the same
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 300]); // Adjusted max price

  // --- 1. REMOVE HARDCODED PRODUCTS AND ADD NEW STATE ---
  // const products = [ ... ]; // This is now gone.

  const [allProducts, setAllProducts] = useState([]); // Holds all products from the DB
  const [loading, setLoading] = useState(true); // To show a loading message
  const [error, setError] = useState(null); // To show an error message

  // --- 2. FETCH PRODUCTS FROM YOUR API WHEN THE PAGE LOADS ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // This is the GET request to your backend
        const response = await axios.get("http://localhost:5000/api/products");
        setAllProducts(response.data); // Store the fetched products in state
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Could not load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // The empty array [] ensures this runs only once.

  // --- 3. DYNAMICALLY CREATE CATEGORIES FROM FETCHED PRODUCTS ---
  // This creates a unique list of categories from your product data
  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

  // --- 4. UPDATE FILTERING LOGIC TO USE `allProducts` STATE ---
  const filteredProducts = allProducts.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  // --- 5. RENDER LOADING OR ERROR MESSAGES ---
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-neutral-900 text-white">
        <p className="text-2xl">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-neutral-900 text-red-500">
        <p className="text-2xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 scroll-smooth">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-500 py-16 px-6 ">
        <div className="container mx-auto text-center max-w-4xl pt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Your Style
          </h1>
          <p className="text-lg text-white/90">
            Explore our curated collection of premium fashion items
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* SIDEBAR FILTERS (This part remains mostly the same) */}
          <aside
            className={`lg:w-64 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-pink-500 text-white"
                          : "text-gray-400 hover:bg-neutral-700 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">
                  Price Range
                </h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="300" // Adjusted max price
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full accent-pink-500"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-lg"
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>
            </div>

            {/* Products Count */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {filteredProducts.length} Products
              </h2>
              {/* Sort dropdown can be implemented later */}
            </div>

            {/* Products Grid - Now uses data from your database! */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {filteredProducts.map((product) => (
                <div
                  key={product._id} // Use the unique ID from MongoDB
                  className="group bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2 group-hover:text-pink-500 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-500 font-bold text-lg">
                        ${product.price}
                      </span>
                    </div>
                    <button className="w-full mt-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;