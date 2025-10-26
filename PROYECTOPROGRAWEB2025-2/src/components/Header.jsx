import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import categorias from "../data/categorias.js";
import "./Header.css";
import { useUser } from "../components/context/UserContext";
import imgcarrito from "../assets/carritoimagen.png";
import { useCart } from "../components/context/CartContext.jsx";
function Header() {

  const {carrito} = useCart();
  const totalProductos = carrito.reduce((total, producto) => total + (producto.cantidad ?? 1), 0);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const alternarMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  const seleccionarCategoria = (nombre) => {
    setMostrarMenu(false);
    navigate(`/productos?categoria=${encodeURIComponent(nombre)}`);
  };

  return (
    <header className="encabezado">
      <div className="barra-navegacion">
        <div className="logo">
          <h1 className="texto-logo">
            <Link to="/" className="logo-link">GamePlay</Link>
          </h1>
        </div>

        <div className="barra-busqueda">
          <input type="text" placeholder="Buscar un producto..." />
        </div>

        <div className="acciones">
          <Link to="/carrito" className="boton-carrito">
            <img src={imgcarrito} alt="Carrito" className="icono-carrito" />
            <span className = 'counter'>{totalProductos}</span> {/*En esta linea usamos span para mostrar la cantidad de productos agregadas al carrito*/}
          </Link>
          {user ? (
            <div className="usuario-info">
              <Link to="/register/MisOrdenes" className="boton-me">
               <span className="nombre-usuario">👤 {user.nombre}</span>   
              </Link>        
              <button className="boton-logout" onClick={logout}>Cerrar sesión</button>
            </div>
          ) : (
            <a href="/login" className="boton-login">Iniciar sesión</a>
          )}
        </div>
      </div>

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
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
