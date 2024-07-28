import React from "react";

const ImageSection = ({ imgSrc, altText, overlayText }) => {
  return (
    <div className="relative w-full overflow-hidden group">
      <img
        src={imgSrc}
        alt={altText}
        className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <span className="text-white text-lg font-semibold">{overlayText}</span>
      </div>
    </div>
  );
};

export default ImageSection;