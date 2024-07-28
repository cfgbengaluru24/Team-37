import React from "react";
import Product from "./Product";
import pen_stand_1 from "../pics/pen_stand_1.png";

const products = [
  { id: 1, img: pen_stand_1, productName: "vase", price: 29.99 },
  { id: 2, img: pen_stand_1, productName: "pen stand", price: 39.99 },
  { id: 3, img: pen_stand_1, productName: "pen", price: 19.99 },
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
