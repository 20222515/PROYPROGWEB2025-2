import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import productos from "../data/productos.js";
import ProductCard from "../components/ProductCard";
import "./ProductoDetalle.css";
import { useCart } from "../components/context/CartContext.jsx";

function ProductoDetalle() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id));
  const { agregarAlCarrito } = useCart();

    const handleAgregar = () => {
    agregarAlCarrito({
      id: producto.id,
      imagen: imagePath,
      nombre: producto.nombre,
      precio: Number(producto.precio),
      categoria: producto.categoria,
      cantidad: 1,
    });
    };

  if (!producto) {
    return (
      <>
       
        <div className="detalle-container">
          <h2>Producto no encontrado</h2>
        </div>
        
      </>
    );
  }


  const similares = productos.filter(
    (p) => p.categoria === producto.categoria && p.id !== producto.id
  );


  const imagePath = `/${producto.imagen.replace(/^\//, "")}`;

  return (
    <>
      

      <div className="detalle-container">
        <div className="detalle-producto">

          <img
            src={imagePath}
            alt={producto.nombre}
            className="detalle-imagen"
          />

          <div className="detalle-info">
            <h2>{producto.nombre}</h2>
            <p className="detalle-categoria">{producto.categoria}</p>
            <p className="detalle-descripcion">{producto.descripcion}</p>
            <p className="detalle-precio">S/ {producto.precio}</p>
            <button className="detalle-boton" onClick={handleAgregar}>Agregar al carrito</button>
          </div>
        </div>

        {similares.length > 0 && (
          <div className="similares-container">
            <h3>Productos similares</h3>
            <div className="similares-grid">
              {similares.map((item) => {
                const similarImagePath = `/${item.imagen.replace(/^\//, "")}`;
                return (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    nombre={item.nombre}
                    categoria={item.categoria}
                    precio={item.precio}
                    imagen={similarImagePath} 
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      
    </>
  );
}

export default ProductoDetalle;
