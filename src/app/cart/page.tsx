"use client";
import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Event 1", date: "2025-02-01", price: 20 },
    { id: 2, title: "Event 2", date: "2025-03-05", price: 25 },
    { id: 3, title: "Event 3", date: "2025-04-10", price: 15 },
    { id: 4, title: "Event 4", date: "2025-05-20", price: 30 },
    { id: 5, title: "Event 5", date: "2025-06-25", price: 10 },
  ]);

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl text-gray-700 mx-auto px-4 py-3">
      <h1 className="text-lg sm:text-2xl font-bold mb-3 text-center">
        Your Cart
      </h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div className="flex flex-col space-y-1 text-xs sm:text-sm">
              <span className="font-semibold">{item.title}</span>
              <span className="text-gray-500">{item.date}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-sm sm:text-lg">
                ${item.price}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-full text-xs sm:text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 ? (
        <>
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <span className="font-semibold text-lg">Total:</span>
            <span className="font-bold text-lg sm:text-xl">${totalPrice}</span>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full text-xs sm:text-sm">
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="text-center mt-6 text-gray-500 text-xs sm:text-sm">
          Your cart is empty.
        </div>
      )}
    </div>
  );
};

export default CartPage;
