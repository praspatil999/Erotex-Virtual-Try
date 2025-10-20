import React, { useState } from "react";
import {
  CreditCard,
  Lock,
  CheckCircle,
  Package,
  Truck,
  Home,
} from "lucide-react";

const PaymentPage = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const cartItems = [
    { name: "Summer Floral Dress", quantity: 1, price: 89.99 },
    { name: "Classic Denim Jacket", quantity: 2, price: 119.99 },
    { name: "Leather Handbag", quantity: 1, price: 149.99 },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleCardChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-neutral-900 scroll-smooth">
      

      {/* PROGRESS STEPS */}
      <div className="bg-neutral-800 border-b border-neutral-700 py-6">
        <div className="container mx-auto px-6 max-w-4xl mt-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1
                    ? "bg-pink-500 text-white"
                    : "bg-neutral-700 text-gray-400"
                }`}
              >
                <Home size={20} />
              </div>
              <span
                className={`text-sm font-medium ${
                  step >= 1 ? "text-white" : "text-gray-400"
                }`}
              >
                Shipping
              </span>
            </div>
            <div
              className={`flex-1 h-0.5 mx-4 ${
                step >= 2 ? "bg-pink-500" : "bg-neutral-700"
              }`}
            />
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2
                    ? "bg-pink-500 text-white"
                    : "bg-neutral-700 text-gray-400"
                }`}
              >
                <CreditCard size={20} />
              </div>
              <span
                className={`text-sm font-medium ${
                  step >= 2 ? "text-white" : "text-gray-400"
                }`}
              >
                Payment
              </span>
            </div>
            <div
              className={`flex-1 h-0.5 mx-4 ${
                step >= 3 ? "bg-pink-500" : "bg-neutral-700"
              }`}
            />
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 3
                    ? "bg-pink-500 text-white"
                    : "bg-neutral-700 text-gray-400"
                }`}
              >
                <CheckCircle size={20} />
              </div>
              <span
                className={`text-sm font-medium ${
                  step >= 3 ? "text-white" : "text-gray-400"
                }`}
              >
                Confirm
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* FORMS */}
          <div className="lg:col-span-2 space-y-6">
            {step === 1 && (
              <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="text-pink-500" size={28} />
                  <h2 className="text-2xl font-bold text-white">
                    Shipping Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={shippingInfo.firstName}
                        onChange={handleShippingChange}
                        placeholder="John"
                        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={shippingInfo.lastName}
                        onChange={handleShippingChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleShippingChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 text-sm">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      placeholder="+1 (234) 567-8900"
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 text-sm">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                      placeholder="123 Main Street"
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingChange}
                        placeholder="New York"
                        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleShippingChange}
                        placeholder="NY"
                        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={handleShippingChange}
                        placeholder="10001"
                        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">
                        Country
                      </label>
                      <select
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleShippingChange}
                        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full mt-6 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-pink-500/30"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="text-pink-500" size={28} />
                  <h2 className="text-2xl font-bold text-white">
                    Payment Method
                  </h2>
                </div>

                {/* Payment Method Selection */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === "card"
                        ? "border-pink-500 bg-pink-500/10"
                        : "border-neutral-700 bg-neutral-700"
                    }`}
                  >
                    <CreditCard
                      className={`mx-auto mb-2 ${
                        paymentMethod === "card"
                          ? "text-pink-500"
                          : "text-gray-400"
                      }`}
                      size={24}
                    />
                    <p
                      className={`text-sm font-medium ${
                        paymentMethod === "card"
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    >
                      Card
                    </p>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("paypal")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === "paypal"
                        ? "border-pink-500 bg-pink-500/10"
                        : "border-neutral-700 bg-neutral-700"
                    }`}
                  >
                    <div
                      className={`mx-auto mb-2 font-bold text-lg ${
                        paymentMethod === "paypal"
                          ? "text-pink-500"
                          : "text-gray-400"
                      }`}
                    >
                      PP
                    </div>
                    <p
                      className={`text-sm font-medium ${
                        paymentMethod === "paypal"
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    >
                      PayPal
                    </p>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("apple")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === "apple"
                        ? "border-pink-500 bg-pink-500/10"
                        : "border-neutral-700 bg-neutral-700"
                    }`}
                  >
                    <div
                      className={`mx-auto mb-2 font-bold text-lg ${
                        paymentMethod === "apple"
                          ? "text-pink-500"
                          : "text-gray-400"
                      }`}
                    ></div>
                    <p
                      className={`text-sm font-medium ${
                        paymentMethod === "apple"
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    >
                      Apple Pay
                    </p>
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={cardInfo.cardNumber}
                        onChange={handleCardChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={cardInfo.cardName}
                        onChange={handleCardChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2 text-sm">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={cardInfo.expiryDate}
                          onChange={handleCardChange}
                          placeholder="MM/YY"
                          maxLength="5"
                          className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2 text-sm">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={cardInfo.cvv}
                          onChange={handleCardChange}
                          placeholder="123"
                          maxLength="4"
                          className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-4 rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-pink-500/30"
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Review Your Order
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-semibold mb-3">
                        Shipping Address
                      </h3>
                      <div className="bg-neutral-700 rounded-lg p-4 text-gray-300 text-sm">
                        <p>
                          {shippingInfo.firstName} {shippingInfo.lastName}
                        </p>
                        <p>{shippingInfo.address}</p>
                        <p>
                          {shippingInfo.city}, {shippingInfo.state}{" "}
                          {shippingInfo.zipCode}
                        </p>
                        <p>{shippingInfo.country}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-3">
                        Payment Method
                      </h3>
                      <div className="bg-neutral-700 rounded-lg p-4 text-gray-300 text-sm flex items-center gap-3">
                        <CreditCard className="text-pink-500" size={20} />
                        <span>
                          •••• •••• •••• {cardInfo.cardNumber.slice(-4)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-4 rounded-lg transition-colors"
                    >
                      Back
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2">
                      <Lock size={20} />
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <div className="flex-1">
                      <p className="text-white font-medium">{item.name}</p>
                      <p className="text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-white font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-neutral-700 pt-6 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-neutral-700 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-white">Total</span>
                  <span className="text-2xl font-bold text-pink-500">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="bg-neutral-700 rounded-lg p-4 flex items-start gap-3">
                <Lock className="text-pink-500 flex-shrink-0" size={20} />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    Secure Payment
                  </p>
                  <p className="text-gray-400 text-xs">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
