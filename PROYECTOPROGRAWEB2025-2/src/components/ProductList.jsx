import React from "react";
import productos from "../data/productos.js";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList() {
  const topProductos = productos.slice(0, 5);

  return (
    <section className="mas-vendido">
      <h2>Lo más vendido</h2>
      <div className="productos">
        {topProductos.map((producto) => (
          <ProductCard
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            categoria={producto.categoria}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
