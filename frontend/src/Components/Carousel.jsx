import React from "react";
import image1 from "../pics/image1.jpg";
import image2 from "../pics/image2.jpg";
import image3 from "../pics/image3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <div className="h-1/2 w-full">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div className="relative w-full h-full">
          <img src={image1} alt="Slide 1" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 flex items-center justify-center text-white text-xl">
          The Lantana plant, often regarded as an invasive species, has found a valuable role in crafts and employment creation. Its sturdy and flexible stems are ideal for weaving baskets, making furniture, and creating decorative items, providing an eco-friendly alternative to traditional materials. Harvesting Lantana helps manage its spread, benefiting local ecosystems, while also offering sustainable livelihoods for rural communities. The craft industry around Lantana supports local employment, skill development, and entrepreneurship, turning an ecological challenge into a socio-economic opportunity.
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src={image2} alt="Slide 2" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 flex items-center justify-center text-white text-xl">
            Slide 2 Text
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src={image3} alt="Slide 3" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 flex items-center justify-center text-white text-xl">
            Slide 3 Text
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
