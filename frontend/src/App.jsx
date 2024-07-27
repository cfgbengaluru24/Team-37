import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Ecommerce from "./Components/Ecommerce";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
      </Routes>
    </div>
  );
}

export default App;
