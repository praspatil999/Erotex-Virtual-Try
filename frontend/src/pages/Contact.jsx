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
    e.preventDefault();
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
        <div className="container mx-auto text-center max-w-4xl">
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
            {/* Contact Card 1 */}
            <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-pink-500" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm mb-3">
                Send us an email anytime!
              </p>
              <a
                href="mailto:support@estorex.com"
                className="text-pink-500 hover:text-pink-400 text-sm font-medium"
              >
                support@estorex.com
              </a>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-pink-500" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm mb-3">
                Mon-Fri from 9am to 6pm
              </p>
              <a
                href="tel:+1234567890"
                className="text-pink-500 hover:text-pink-400 text-sm font-medium"
              >
                +1 (234) 567-890
              </a>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-pink-500" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-400 text-sm mb-3">
                Come say hello at our office
              </p>
              <p className="text-pink-500 text-sm">
                123 Fashion Street
                <br />
                New York, NY 10001
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-white" size={24} />
                <h3 className="text-white font-bold text-lg">Business Hours</h3>
              </div>
              <div className="space-y-2 text-white/90 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
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

              <div className="space-y-6">
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
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30 transform hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="border-b border-neutral-700 pb-4">
                  <h4 className="text-white font-semibold mb-2">
                    How long does shipping take?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Standard shipping typically takes 5-7 business days. Express
                    shipping is available for 2-3 day delivery.
                  </p>
                </div>
                <div className="border-b border-neutral-700 pb-4">
                  <h4 className="text-white font-semibold mb-2">
                    What is your return policy?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    We offer a 30-day return policy for all unworn items with
                    original tags attached.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Do you offer international shipping?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Yes! We ship to over 50 countries worldwide. Shipping costs
                    vary by location.
                  </p>
                </div>
              </div>
            </div>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Location Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
