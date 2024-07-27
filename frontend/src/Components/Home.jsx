import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Store</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
