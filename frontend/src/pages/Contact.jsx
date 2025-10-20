// src/pages/ContactPage.jsx

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the browser from reloading
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-neutral-900 scroll-smooth">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-500 py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl mt-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* CONTACT INFO CARDS */}
          <div className="lg:col-span-1 space-y-6">
            {/* ... (Your 3 contact cards are perfect, no change) ... */}
            {/* ... (Your Business Hours card is perfect, no change) ... */}
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="text-pink-500" size={28} />
                <h2 className="text-3xl font-bold text-white">
                  Send us a Message
                </h2>
              </div>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {/* --- 1. USE A <form> TAG WITH onSubmit --- */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit" // Use type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30 transform hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
              {/* --- END OF <form> --- */}
            </div>

            {/* ... (Your FAQ section is perfect, no change) ... */}
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <section className="bg-neutral-950 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Find Us Here
          </h2>
          <div className="bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 h-96">
            
            {/* --- 2. FIXED THE MAP SRC --- */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.610515123131!2d-73.9878536845938!3d40.74844097932787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c85d%3A0x6a0f3b0e3e2b2c4c!2s123%20Fashion%20Ave%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;