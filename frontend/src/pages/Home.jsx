import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Sparkles,
  ShoppingBag,
  Zap,
  Instagram,
  Twitter,
  Facebook,
  Mail,
} from "lucide-react";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Summer Styles",
      description: "Explore the latest trends for the season",
      image:
        "https://img.freepik.com/free-photo/young-sensitive-man-thinking_23-2149459724.jpg?w=360",
      bgColor: "bg-gray-100",
    },
    {
      id: 2,
      title: "Men's Collection",
      description: "Discover our curated selection for men",
      image:
        "https://burst.shopifycdn.com/photos/model-in-gold-fashion.jpg?width=1000&format=pjpg&exif=0&iptc=0",
      bgColor: "bg-neutral-800",
    },
    {
      id: 3,
      title: "New Arrivals",
      description: "Freshly added items you'll love",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      bgColor: "bg-amber-100",
    },
  ];

  return (
    <section className="bg-neutral-900 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              <div
                className={`${collection.bgColor} rounded-2xl overflow-hidden mb-4 aspect-[4/5] max-w-xs mx-auto  transition-all duration-300 group-hover:scale-105 shadow-lg flex items-center justify-center p-6`}
              >
                <img src={collection.image} alt="" />
              </div>
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold text-white group-hover:text-pink-500 transition-colors duration-300">
                  {collection.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
    const navigate = useNavigate();

    const handleVirtualtryon = () => {
      navigate("/virtual-try-on");
    };
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 scroll-smooth">
      {/* HERO SECTION */}
      <section
        className="flex flex-col justify-center items-center text-center px-6 py-24 bg-background-dark/70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Try Before You Buy 👗
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 mb-8 leading-relaxed">
            Experience AI-powered fashion that lets you preview outfits
            virtually. Discover how you look before checkout — all from your
            browser.
          </p>

          <button onClick={handleVirtualtryon} className="px-10 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-pink-500/30 transform hover:scale-105">
            Start Virtual Try-On
          </button>
        </div>
      </section>

      {/* Collections component */}
      <FeaturedCollections />

      {/* FEATURE SECTION */}
      <section className="bg-neutral-950 py-24  overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6  z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Why Choose Estorex?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transform your shopping experience with cutting-edge technology
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "AI-Powered Try-On",
                desc: "Visualize outfits on you instantly using advanced AI technology that adapts to your unique style.",
              },
              {
                icon: <ShoppingBag className="w-12 h-12" />,
                title: "Smart Shopping",
                desc: "Get personalized recommendations that match your style preferences and body type perfectly.",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Fast & Easy",
                desc: "Upload, preview, and checkout — all within seconds. No complicated setup required.",
              },
            ].map((f, idx) => (
              <div
                key={f.title}
                className="group p-10 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 hover:border-pink-500/50 transition-all duration-500 shadow-xl hover:shadow-pink-500/20 transform hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-pink-500 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-500 py-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Shopping?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of satisfied customers who've revolutionized how they
            shop online
          </p>
          <button className="px-10 py-4 bg-white text-pink-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
