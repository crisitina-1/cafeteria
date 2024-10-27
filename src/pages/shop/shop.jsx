import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Carrusel from "../../components/carrusel/carrusel";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
        <Carrusel />

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
