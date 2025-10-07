import categorias from "../data/categorias.js";
import "./CategoryList.css";

function CategoryList() {
  return (
    <section className="category-section">
      <h2 className="category-title">Explora las categorías</h2>
      <div className="category-list scrollable">
        {categorias.map((cat, index) => (
          <a key={index} href="#" className="category-item">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${cat.imagen})` }}
            ></div>
            <p className="category-name">{cat.nombre}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
