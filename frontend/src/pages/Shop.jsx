import React, { useState } from "react";
import { Heart, ShoppingCart, Filter, X } from "lucide-react";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = [
    "All",
    "Women",
    "Men",
    "Accessories",
    "New Arrivals",
    "Sale",
  ];

  const products = [
    {
      id: 1,
      name: "Summer Floral Dress",
      price: 89.99,
      originalPrice: 129.99,
      category: "Women",
      image:
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=400&q=80",
      tag: "Sale",
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 119.99,
      category: "Women",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80",
      tag: "New",
    },
    {
      id: 3,
      name: "Elegant White Shirt",
      price: 59.99,
      category: "Men",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80",
      tag: "",
    },
    {
      id: 4,
      name: "Leather Handbag",
      price: 149.99,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&q=80",
      tag: "",
    },
    {
      id: 5,
      name: "Casual Sneakers",
      price: 79.99,
      originalPrice: 99.99,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80",
      tag: "Sale",
    },
    {
      id: 6,
      name: "Slim Fit Blazer",
      price: 199.99,
      category: "Men",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80",
      tag: "New",
    },
    {
      id: 7,
      name: "Bohemian Maxi Dress",
      price: 94.99,
      category: "Women",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80",
      tag: "",
    },
    {
      id: 8,
      name: "Designer Sunglasses",
      price: 129.99,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80",
      tag: "New",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

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

      <div className="container mx-auto px-6 py-12 -z-40">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* SIDEBAR FILTERS */}
          <aside
            className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}
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
                    max="1000"
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

              {/* Reset Button */}
              <button className="w-full py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg text-sm font-medium transition-colors">
                Reset Filters
              </button>
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
              <select className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:border-pink-500">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 hover:border-pink-500/50 transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className=" aspect-[3/4] overflow-hidden bg-neutral-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.tag && (
                      <span
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                          product.tag === "Sale"
                            ? "bg-red-500 text-white"
                            : "bg-pink-500 text-white"
                        }`}
                      >
                        {product.tag}
                      </span>
                    )}
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 hover:bg-pink-500 hover:text-white transition-colors">
                        <Heart size={18} />
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 hover:bg-pink-500 hover:text-white transition-colors">
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2 group-hover:text-pink-500 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-500 font-bold text-lg">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="w-full mt-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-colors">
                Load More Products
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
