import React from "react";
import Navbar from "./Navbar";
import CarouselComponent from "./Carousel";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to NatureCrafts</h1>
        <CarouselComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
