// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

const productos = [
  { name: "Call of Duty Black Ops 7 - PS5", price: 199, img: "/img/juego1.jpg" },
  { name: "Spider-Man 2 - PS5", price: 249, img: "/img/juego2.jpg" },
  { name: "God of War Ragnarok", price: 229, img: "/img/juego3.jpg" },
];

function ProductList() {
  return (
    <section className="mas-vendido">
      <h2>Lo más vendido</h2>
      <div className="productos">
        {productos.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
