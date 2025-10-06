// src/components/CategoryList.jsx
import React from "react";

const categories = [
  { name: "Videojuegos", img: "/img/videojuegos.png" },
  { name: "Consolas", img: "/img/consolas.png" },
  { name: "Periféricos", img: "/img/perifericos.png" },
  { name: "Coleccionables", img: "/img/coleccionables.png" },
];

function CategoryList() {
  return (
    <section className="categorias">
      <h2>Explora las categorías</h2>
      <div className="categoria-lista">
        {categories.map((cat, i) => (
          <div className="categoria" key={i}>
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
