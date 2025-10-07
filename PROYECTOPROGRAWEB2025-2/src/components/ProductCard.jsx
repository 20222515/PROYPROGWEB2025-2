import React from "react";
import "./ProductCard.css";

function ProductCard({ nombre, categoria, precio, imagen }) {
  return (
    <div className="product-card">
      <img src={imagen} alt={nombre} className="product-image" />

      <div className="product-info">
        <p className="product-name">{nombre}</p>
        <p className="product-category">{categoria}</p>
        <p className="product-price">S/ {precio}</p>
      </div>

      <button className="product-btn">Agregar</button>
    </div>
  );
}

export default ProductCard;
