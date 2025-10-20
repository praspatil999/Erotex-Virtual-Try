import React, { useState } from "react";
import {
  Upload,
  Camera,
  RefreshCw,
  Download,
  Share2,
  ShoppingCart,
  Heart,
  Sparkles,
  X,
  Zap,
  Image as ImageIcon,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const VirtualTryOnPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
      category: "Tops",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=400&q=80",
      category: "Jackets",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Floral Summer Dress",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80",
      category: "Dresses",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Casual Hoodie",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80",
      category: "Tops",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Leather Jacket",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80",
      category: "Jackets",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Striped Shirt",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80",
      category: "Tops",
      rating: 4.4,
    },
  ];

  const categories = ["all", "Tops", "Jackets", "Dresses"];

  const colors = [
    { name: "black", hex: "#000000" },
    { name: "white", hex: "#FFFFFF" },
    { name: "red", hex: "#EF4444" },
    { name: "blue", hex: "#3B82F6" },
    { name: "green", hex: "#10B981" },
    { name: "pink", hex: "#EC4899" },
  ];

  const sampleImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-neutral-900 scroll-smooth">
      {/* HERO SECTION */}
      <section className=" bg-gradient-to-br from-pink-600 via-pink-500 to-purple-600 py-20 px-6 overflow-hidden">


        <div className="container mx-auto text-center max-w-5xl mt-20  z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 rounded-full border border-white/30">
            <span className="text-white font-semibold text-sm flex items-center gap-2">
              <Sparkles size={16} />
              Powered by Advanced AI Technology
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Experience Fashion Like Never Before
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Upload your photo, select any outfit, and see yourself wearing it
            instantly with our revolutionary AI virtual try-on
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2 border-2 border-white rounded-2xl p-3">
              <Zap className="text-yellow-300" size={24} />
              <span className="font-semibold">Instant Results</span>
            </div>
            <div className="flex items-center gap-2 border-2  border-white rounded-2xl p-3">
              <TrendingUp className="text-green-300" size={24} />
              <span className="font-semibold">99% Accuracy</span>
            </div>
            <div className="flex items-center gap-2 border-2 border-white rounded-2xl p-3">
              <Users className="text-blue-300" size={24} />
              <span className="font-semibold">50K+ Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* LEFT SECTION - UPLOAD */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 border border-neutral-700 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Camera className="text-pink-500" size={28} />
                  Your Photo
                </h2>
                {uploadedImage && (
                  <button
                    onClick={() => setUploadedImage(null)}
                    className="text-red-500 hover:text-red-400 text-sm font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>

              {!uploadedImage ? (
                <div>
                  <div className="border-2 border-dashed border-neutral-600 rounded-2xl p-12 text-center hover:border-pink-500/50 transition-all cursor-pointer bg-neutral-900/50 mb-6">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Upload className="text-pink-500" size={40} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Upload Your Photo
                      </h3>
                      <p className="text-sm text-gray-400 mb-6">
                        Drag & drop or click to browse
                      </p>
                      <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-pink-500/50 transform hover:scale-105">
                        Choose File
                      </button>
                    </label>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm font-medium">
                      Or try with sample images:
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {sampleImages.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => setUploadedImage(img)}
                          className=" group cursor-pointer rounded-xl overflow-hidden border-2 border-neutral-700 hover:border-pink-500 transition-all"
                        >
                          <img
                            src={img}
                            alt={`Sample ${idx + 1}`}
                            className="w-full aspect-square object-cover"
                          />
                          <div className=" inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">
                              Use This
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-pink-500/30 shadow-lg">
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="w-full h-auto"
                    />
                  </div>
                  <label htmlFor="image-change">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-change"
                    />
                    <button className="w-full px-4 py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                      <RefreshCw size={18} />
                      Change Photo
                    </button>
                  </label>
                </div>
              )}
            </div>

            {/* INSTRUCTIONS */}
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl p-6 border border-pink-500/20">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-pink-500" size={20} />
                Pro Tips for Best Results
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 font-bold text-lg">•</span>
                  <span>
                    Use well-lit photos with your full upper body visible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 font-bold text-lg">•</span>
                  <span>Stand straight and face the camera directly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 font-bold text-lg">•</span>
                  <span>Wear fitted clothing for accurate visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 font-bold text-lg">•</span>
                  <span>
                    Avoid complex backgrounds for better AI processing
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* MIDDLE SECTION - PRODUCTS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 border border-neutral-700 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <ImageIcon className="text-pink-500" size={28} />
                Choose Your Outfit
              </h2>

              {/* Category Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-6 py-2 rounded-full font-semibold text-sm transition-all whitespace-nowrap ${
                      activeTab === cat
                        ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg"
                        : "bg-neutral-700 text-gray-300 hover:bg-neutral-600"
                    }`}
                  >
                    {cat === "all" ? "All Products" : cat}
                  </button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`group cursor-pointer rounded-2xl overflow-hidden border-2 transition-all ${
                      selectedProduct?.id === product.id
                        ? "border-pink-500 shadow-lg shadow-pink-500/30 scale-105"
                        : "border-neutral-700 hover:border-pink-500/50"
                    }`}
                  >
                    <div className=" aspect-square overflow-hidden bg-neutral-700">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {selectedProduct?.id === product.id && (
                        <div className="absolute top-2 right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-4 bg-neutral-900">
                      <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-pink-500 font-bold">
                          ${product.price}
                        </p>
                        <div className="flex items-center gap-1">
                          <Star
                            className="text-yellow-500 fill-yellow-500"
                            size={14}
                          />
                          <span className="text-xs text-gray-400">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SIZE & COLOR */}
            {selectedProduct && (
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 border border-neutral-700 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      Size Selection
                    </h3>
                    <div className="grid grid-cols-4 gap-3">
                      {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-3 rounded-xl font-bold text-sm transition-all ${
                            selectedSize === size
                              ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg"
                              : "bg-neutral-700 text-gray-300 hover:bg-neutral-600"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      Color Options
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={`w-12 h-12 rounded-full border-4 transition-all ${
                            selectedColor === color.name
                              ? "border-pink-500 scale-110 shadow-lg"
                              : "border-neutral-600 hover:border-neutral-500"
                          }`}
                          style={{ backgroundColor: color.hex }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* GENERATE BUTTON */}
                <button
                  onClick={handleGenerate}
                  disabled={!uploadedImage || isGenerating}
                  className={`w-full mt-6 py-5 rounded-2xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3 ${
                    !uploadedImage || isGenerating
                      ? "bg-neutral-700 text-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white shadow-pink-500/50 hover:shadow-pink-500/70 transform hover:scale-105"
                  }`}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="animate-spin" size={24} />
                      <span>Generating Your Try-On...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={24} />
                      <span>Generate Virtual Try-On</span>
                      <ChevronRight size={24} />
                    </>
                  )}
                </button>
              </div>
            )}

            {/* RESULT */}
            {showResult && (
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 border border-pink-500/50 shadow-2xl shadow-pink-500/20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="text-pink-500" size={28} />
                    Your Virtual Try-On
                  </h2>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-neutral-700 hover:bg-neutral-600 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                      <Download size={18} />
                    </button>
                    <button className="w-10 h-10 bg-neutral-700 hover:bg-neutral-600 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden mb-6 border-2 border-pink-500/30">
                  <img
                    src={uploadedImage}
                    alt="Try-on result"
                    className="w-full h-auto"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="px-6 py-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                  <button className="px-6 py-4 bg-neutral-700 hover:bg-neutral-600 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                    <Heart size={20} />
                    Wishlist
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <section className="bg-neutral-950 py-16 px-6 border-t border-neutral-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50K+", label: "Active Users" },
              { value: "1M+", label: "Try-Ons Generated" },
              { value: "99%", label: "Accuracy Rate" },
              { value: "<3s", label: "Average Processing" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-4xl font-bold text-pink-500 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #262626;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ec4899;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #db2777;
        }
      `}</style>
    </div>
  );
};

export default VirtualTryOnPage;
