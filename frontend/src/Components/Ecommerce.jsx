import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Footer from "./Footer";

const Ecommerce = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">E-commerce Products</h1>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Ecommerce;
