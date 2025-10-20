import React from "react";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Summer Styles",
      description: "Explore the latest trends for the season",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
      bgColor: "bg-gray-100",
    },
    {
      id: 2,
      title: "Men's Collection",
      description: "Discover our curated selection for men",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
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
    <section className="bg-neutral-900 py-20 px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Featured Collections
        </h2>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              {/* Image Container */}
              <div
                className={`${collection.bgColor} rounded-3xl overflow-hidden mb-6 aspect-[3/5] max-h-56 relative transition-transform duration-300 group-hover:scale-105`}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-pink-500 transition-colors duration-300">
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

export default FeaturedCollections;
