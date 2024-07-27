// src/components/ProductList.jsx
import React from "react";
import Product from "./Product";

const products = [
  { id: 1, img: "https://example.com/image1.jpg", productName: "Product 1", price: 29.99 },
  { id: 2, img: "https://example.com/image2.jpg", productName: "Product 2", price: 39.99 },
  { id: 3, img: "https://example.com/image3.jpg", productName: "Product 3", price: 19.99 },
  { id: 4, img: "https://example.com/image4.jpg", productName: "Product 4", price: 49.99 },
  { id: 5, img: "https://example.com/image5.jpg", productName: "Product 5", price: 24.99 },
  { id: 6, img: "https://example.com/image6.jpg", productName: "Product 6", price: 34.99 },
  { id: 7, img: "https://example.com/image7.jpg", productName: "Product 7", price: 44.99 },
  { id: 8, img: "https://example.com/image8.jpg", productName: "Product 8", price: 54.99 },
  { id: 9, img: "https://example.com/image9.jpg", productName: "Product 9", price: 15.99 },
  { id: 10, img: "https://example.com/image10.jpg", productName: "Product 10", price: 29.99 },
];

const ProductList = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-3 gap-4"> {/* Use grid layout for consistent sizing */}
      {products.map((product) => (
        <Product key={product.id} img={product.img} productName={product.productName} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
