import React, { useState } from "react";
import categorias from "../data/categorias.js";
import "./Header.css";

function Header() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const alternarMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  const seleccionarCategoria = (nombre) => {
    console.log("Categoría seleccionada:", nombre);
    setMostrarMenu(false);
  };

  return (
    <header className="encabezado">
      {/* --- BARRA SUPERIOR --- */}
      <div className="barra-navegacion">
        <div className="logo">
          <h1 className="texto-logo">GamePlay</h1>
        </div>

        <div className="barra-busqueda">
          <input type="text" placeholder="Buscar un producto..." />
        </div>

        <div className="acciones">
          <a href="#" className="boton-carrito">Carrito</a>
          <a href="#" className="boton-login">Usuario</a>
        </div>
      </div>

      {/* --- MENÚ INFERIOR --- */}
      <nav className="menu">
        <ul className="menu-izquierda">
          <li className="menu-categorias" onClick={alternarMenu}>
            <a href="#">Categorías ▼</a>

            {mostrarMenu && (
              <ul className="submenu">
                {categorias.map((cat) => (
                  <li key={cat.id}>
                    <button
                      className="submenu-item"
                      onClick={() => seleccionarCategoria(cat.nombre)}
                    >
                      {cat.nombre}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><a href="/productos">Productos</a></li>
          <li><a href="#">Nosotros</a></li>
        </ul>

        <ul className="menu-derecha">
          <li><a href="#">Ofertas</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
