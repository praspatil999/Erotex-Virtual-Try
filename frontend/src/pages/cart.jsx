import React, { useState } from "react";
import { X, Plus, Minus, ShoppingBag, Tag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
    
  const handleCheckout = () => {
        navigate("/checkout");
  };
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Summer Floral Dress",
      price: 89.99,
      quantity: 1,
      size: "M",
      color: "Blue",
      image:
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 119.99,
      quantity: 2,
      size: "L",
      color: "Dark Blue",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      name: "Leather Handbag",
      price: 149.99,
      quantity: 1,
      size: "One Size",
      color: "Brown",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=200&q=80",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "SAVE20") {
      setDiscount(20);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discount) / 100;
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="min-h-screen bg-neutral-900 scroll-smooth">

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto mt-20">
          <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="bg-neutral-800 rounded-2xl p-16 text-center border border-neutral-700">
              <ShoppingBag className="text-gray-600 mx-auto mb-4" size={64} />
              <h2 className="text-2xl font-bold text-white mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-400 mb-6">
                Add some items to get started!
              </p>
              <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold transition-all duration-300">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* CART ITEMS */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-pink-500/50 transition-all duration-300"
                  >
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-neutral-700 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-white">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X size={20} />
                          </button>
                        </div>

                        <div className="flex gap-4 text-sm text-gray-400 mb-4">
                          <span>Size: {item.size}</span>
                          <span>Color: {item.color}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-white flex items-center justify-center transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="text-white font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-white flex items-center justify-center transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-2xl font-bold text-pink-500">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-xs text-gray-400">
                                ${item.price.toFixed(2)} each
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ORDER SUMMARY */}
              <div className="lg:col-span-1">
                <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 sticky top-24">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Order Summary
                  </h2>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="block text-white font-medium mb-2 text-sm">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <Tag
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          size={18}
                        />
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Enter code"
                          className="w-full pl-10 pr-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                        />
                      </div>
                      <button
                        onClick={applyPromoCode}
                        className="px-4 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {discount > 0 && (
                      <p className="text-green-500 text-sm mt-2">
                        ✓ {discount}% discount applied!
                      </p>
                    )}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 border-t border-neutral-700 pt-6 mb-6">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-500">
                        <span>Discount ({discount}%)</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-400">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-green-500 text-xs">
                        🎉 Free shipping on orders over $100
                      </p>
                    )}
                  </div>

                  {/* Total */}
                  <div className="border-t border-neutral-700 pt-6 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-white">
                        Total
                      </span>
                      <span className="text-3xl font-bold text-pink-500">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button onClick={handleCheckout} className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30 transform hover:scale-105">
                    Proceed to Checkout
                    <ArrowRight size={20} />
                  </button>

                  <button className="w-full mt-3 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-3 rounded-lg transition-colors">
                    Continue Shopping
                  </button>

                  {/* Security Note */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">
                      🔒 Secure checkout powered by Stripe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
