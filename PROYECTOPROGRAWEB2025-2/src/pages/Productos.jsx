import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import productos from "../data/productos";
import categorias from "../data/categorias";
import ProductCard from "../components/ProductCard";
import "./Productos.css";

function Productos() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoriaParam = params.get("categoria");

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [pagina, setPagina] = useState(1);
  const productosPorPagina = 12;

  useEffect(() => {
    if (categoriaParam && categorias.some((c) => c.nombre === categoriaParam)) {
      setCategoriaSeleccionada(categoriaParam);
    } else {
      setCategoriaSeleccionada("Todos");
    }
    setPagina(1);
  }, [categoriaParam]);

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const inicio = (pagina - 1) * productosPorPagina;
  const productosPagina = productosFiltrados.slice(inicio, inicio + productosPorPagina);

  return (
    <>
  

      <div className="productos-contenedor">
        <aside className="filtro-categorias">
          <h3>Categorías</h3>
          <ul>
            <li
              onClick={() => {
                setCategoriaSeleccionada("Todos");
                setPagina(1);
              }}
              className={categoriaSeleccionada === "Todos" ? "activo" : ""}
            >
              Todos
            </li>
            {categorias.map((cat) => (
              <li
                key={cat.id}
                onClick={() => {
                  setCategoriaSeleccionada(cat.nombre);
                  setPagina(1);
                }}
                className={categoriaSeleccionada === cat.nombre ? "activo" : ""}
              >
                {cat.nombre}
              </li>
            ))}
          </ul>
        </aside>

        <main className="grid-productos">
          <h2>
            {categoriaSeleccionada === "Todos"
              ? "Todos los productos"
              : categoriaSeleccionada}
          </h2>

          <div className="grid">
            {productosPagina.map((p) => (
              <ProductCard
                key={p.id}   
                id={p.id}
                nombre={p.nombre}
                categoria={p.categoria}
                precio={p.precio}
                imagen={p.imagen}
              />
            ))}
          </div>

          <div className="paginacion">
            <button
              disabled={pagina === 1}
              onClick={() => setPagina(pagina - 1)}
            >
              ← Anterior
            </button>
            <span>
              Página {pagina} de {totalPaginas}
            </span>
            <button
              disabled={pagina === totalPaginas}
              onClick={() => setPagina(pagina + 1)}
            >
              Siguiente →
            </button>
          </div>
        </main>
      </div>

      
    </>
  );
}

export default Productos;
