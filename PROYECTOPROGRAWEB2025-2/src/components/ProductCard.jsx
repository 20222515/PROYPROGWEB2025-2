// src/components/ProductCard.jsx
import React from "react";

function ProductCard({ name, price, img }) {
  return (
    <div className="producto">
      <img src={img} alt={name} />
      <p>{name}</p>
      <span className="precio">S/ {price}</span>
      <button>Agregar</button>
    </div>
  );
}

export default ProductCard;
