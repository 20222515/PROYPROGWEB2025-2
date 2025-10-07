import { useState } from "react";
import { useNavigate } from "react-router-dom";
import categorias from "../data/categorias.js";
import "./CategoryList.css";

function CategoryList() {
  const [indice, setIndice] = useState(0);
  const visible = 4;
  const navigate = useNavigate();

  const siguiente = () => {
    if (indice < categorias.length - visible) {
      setIndice(indice + 1);
    }
  };

  const anterior = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  };

  const irAProductos = (categoria) => {
    navigate(`/productos?categoria=${encodeURIComponent(categoria)}`);
  };

  return (
    <section className="category-section">
      <h2 className="category-title">Explora las categorías</h2>

      <div className="category-carousel">
        <button className="arrow left" onClick={anterior}>
          ◀
        </button>

        <div className="category-list">
          {categorias.slice(indice, indice + visible).map((cat) => (
            <a
              key={cat.id}
              className="category-item"
              onClick={() => irAProductos(cat.nombre)}
              role="button" // 👈 accesibilidad
              style={{ cursor: "pointer" }} // 👈 evita el cambio visual del botón
            >
              <div
                className="category-image"
                style={{ backgroundImage: `url(${cat.imagen})` }}
              ></div>
              <p className="category-name">{cat.nombre}</p>
            </a>
          ))}
        </div>

        <button className="arrow right" onClick={siguiente}>
          ▶
        </button>
      </div>
    </section>
  );
}

export default CategoryList;
