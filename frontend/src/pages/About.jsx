import React from "react";
import {
  Target,
  Heart,
  Award,
  Users,
  TrendingUp,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "10K+", label: "Products" },
    { value: "99%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Emily Davis",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "David Martinez",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: "Innovation First",
      description:
        "We constantly push boundaries with cutting-edge AI technology to revolutionize online shopping.",
    },
    {
      icon: <Heart size={32} />,
      title: "Customer Love",
      description:
        "Our customers are at the heart of everything we do. Your satisfaction is our success.",
    },
    {
      icon: <Award size={32} />,
      title: "Quality Promise",
      description:
        "We curate only the finest products and ensure premium quality in every purchase.",
    },
    {
      icon: <Shield size={32} />,
      title: "Trust & Security",
      description:
        "Your data and privacy are protected with industry-leading security measures.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 scroll-smooth">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-500 py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl mt-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Estorex
          </h1>
          <p className="text-xl text-white/90">
            Transforming the future of online fashion with AI-powered virtual
            try-on technology
          </p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-neutral-900 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-neutral-800 rounded-2xl p-6 text-center border border-neutral-700 hover:border-pink-500/50 transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-pink-500 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="bg-neutral-950 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Founded in 2020, Estorex was born from a simple yet powerful
                  vision: to revolutionize the way people shop for fashion
                  online. We recognized the challenges customers faced when
                  buying clothes without trying them on first.
                </p>
                <p>
                  By combining cutting-edge artificial intelligence with deep
                  fashion expertise, we created a virtual try-on experience that
                  brings the fitting room to your screen. Our technology allows
                  you to see how clothes look on you before making a purchase,
                  reducing returns and increasing satisfaction.
                </p>
                <p>
                  Today, we serve over 50,000 happy customers worldwide,
                  offering a curated collection of premium fashion items
                  alongside our innovative AI technology. Our mission remains
                  unchanged: to make online shopping as confident and enjoyable
                  as shopping in person.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 h-96 flex items-center justify-center">
                <Sparkles className="text-white" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-neutral-900 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Our Values
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do at Estorex
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-pink-500/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* MISSION SECTION */}
      <section className="bg-neutral-900 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-white" size={32} />
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                To empower customers with confidence in their online fashion
                purchases through innovative AI technology, making shopping
                accessible, enjoyable, and sustainable for everyone.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-white" size={32} />
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                To become the world's leading platform for virtual fashion
                experiences, setting new standards for online retail and
                reducing fashion waste through smarter purchasing decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="bg-neutral-950 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
              <Sparkles className="text-pink-500 mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-400 text-sm">
                Advanced machine learning algorithms that understand body types
                and fit preferences to provide accurate virtual try-on
                experiences.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
              <Zap className="text-pink-500 mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-400 text-sm">
                Real-time processing that generates try-on images in seconds,
                ensuring a seamless and efficient shopping experience.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
              <Users className="text-pink-500 mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-3">
                Personalized
              </h3>
              <p className="text-gray-400 text-sm">
                Tailored recommendations based on your style preferences, body
                measurements, and shopping history for the perfect match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-500 py-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Fashion Revolution
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Experience the future of online shopping with Estorex today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-pink-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
              Start Shopping
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300">
              Try Virtual Try-On
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;