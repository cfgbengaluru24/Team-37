// src/components/Product.jsx
import React, { useState } from "react";

const Product = ({ img, productName, price }) => {
  const [quantity, setQuantity] = useState(1); // State to manage quantity

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    // Logic to add the product to the cart can be implemented here
    console.log(`Added ${quantity} of ${productName} to cart at $${price.toFixed(2)} each.`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg m-2 w-64 h-64 flex flex-col items-center p-4 transition-transform transform hover:scale-105">
      <img src={img} alt={productName} className="w-full h-32 object-cover rounded-md mb-2" />
      <h3 className="text-lg font-semibold text-center">{productName}</h3>
      <p className="text-gray-600 mt-1">${price.toFixed(2)}</p>
      <div className="flex items-center mt-2">
        <button className="bg-gray-200 p-1 rounded-l hover:bg-gray-300" onClick={handleDecrement}>-</button>
        <span className="mx-2 font-semibold">{quantity}</span>
        <button className="bg-gray-200 p-1 rounded-r hover:bg-gray-300" onClick={handleIncrement}>+</button>
      </div>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded transition duration-200 hover:bg-blue-700"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
