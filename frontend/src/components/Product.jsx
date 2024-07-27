import React, { useState } from "react";

const Product = ({ img, productName, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleAddToCart = () => {
    console.log(`${quantity} ${productName}(s) added to cart.`);
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl mb-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={img} alt={productName} />
        </div>
        <div className="p-8">
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{productName}</h2>
          <p className="mt-2 text-gray-500">${price.toFixed(2)}</p>
          <div className="flex mt-4">
            <button
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
