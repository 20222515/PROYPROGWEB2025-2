import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="encabezado">
      {/* --- BARRA SUPERIOR --- */}
      <div className="barra-navegacion">
        {/* LOGO IZQUIERDA */}
        <div className="logo">
          <h1 className="texto-logo">
            <Link to="/" className="logo-link">GamePlay</Link>
          </h1>
        </div>

        {/* BARRA DE BÚSQUEDA */}
        <div className="barra-busqueda">
          <input type="text" placeholder="Buscar un producto..." />
        </div>

        {/* BOTONES DERECHA */}
        <div className="acciones">
          <a href="#" className="boton-carrito">Carrito</a>
          <a href="#" className="boton-login">Usuario</a>
        </div>
      </div>

      {/* --- MENÚ INFERIOR --- */}
      <nav className="menu">
        <ul className="menu-izquierda">
          <li><a href="#">Categorías</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Nosotros</a></li>
        </ul>
        <ul className="menu-derecha">
          <li><a href="#">Ofertas</a></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
