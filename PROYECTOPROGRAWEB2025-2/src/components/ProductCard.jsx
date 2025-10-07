import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id, nombre, categoria, precio, imagen }) {
  const navigate = useNavigate();

  // ✅ Asegura que la ruta funcione incluso si no empieza con "/"
  const imagePath = `/${imagen.replace(/^\//, "")}`;

  const verDetalle = () => {
    if (!id) {
      console.error("⚠️ ID indefinido en ProductCard:", { nombre, categoria });
      return;
    }
    navigate(`/producto/${id}`);
  };

  // 🔹 Botón “Agregar” sin funcionalidad (por ahora)
  const agregarAlCarrito = (e) => {
    e.stopPropagation(); // evita abrir el detalle al hacer click
  };

  return (
    <div className="product-card" onClick={verDetalle} style={{ cursor: "pointer" }}>
      <img src={imagePath} alt={nombre} className="product-image" />

      <div className="product-info">
        <p className="product-name">{nombre}</p>
        <p className="product-category">{categoria}</p>
        <p className="product-price">S/ {precio}</p>
      </div>

      <button className="product-btn" onClick={agregarAlCarrito}>
        Agregar
      </button>
    </div>
  );
}

export default ProductCard;
