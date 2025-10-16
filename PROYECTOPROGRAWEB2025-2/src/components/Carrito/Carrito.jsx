import "./Carrito.css";
import { useCart } from "../context/CartContext.jsx";
import Asside from "../asside.jsx";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

const Carrito = () => {
  const { carrito, eliminarProducto, actualizarCantidad, vaciarCarrito } = useCart();
  const navigate = useNavigate();
  const { user } = useUser();
  const AumentarCantidad = (productoId) => actualizarCantidad(productoId, 1);

  const DisminuirCantidad = (productoId) => {
    const producto = carrito.find((item) => item.id === productoId);
    if (producto && Number(producto.cantidad) > 1) {
      actualizarCantidad(productoId, -1);
    }
  };

  
  const handleContinuar = () => {
    if (user){
      navigate("/checkout");
    }
    else{
      alert("Por favor inicia sesión para continuar con la compra.");
      navigate("/login");
    }
  }

  const handcancelarcompra = () => {
    vaciarCarrito();
    navigate("/");
  };

  if (!carrito || carrito.length === 0) {
    return (
      <section className="cart container">
        <h1 className="cart__title">Carrito (0 productos)</h1>
        <p>Tu carrito está vacío.</p>
      </section>
    );
  }

  const totalItems = carrito.reduce((s, it) => s + Number(it.cantidad ?? 1), 0);
  const totalPrecio = carrito.reduce(
    (s, it) => s + Number(it.precio ?? 0) * Number(it.cantidad ?? 1),
    0
  );

  return (
    <section className="cart-container">
      <h1 className="cart__title">
        Carrito <span className="muted">({totalItems} productos)</span>
      </h1>

      <div className="cart-grid">
        <div className="cart-list">
          {carrito.map((producto) => {
            const price = Number(producto.precio ?? 0);
            const qty = Number(producto.cantidad ?? 1);

            return (
              <article key={producto.id} className="cart-item">
                <img src={producto.imagen} alt={producto.nombre} className="cart-img" />
                <div className="cart-info">
                  <h3>{producto.nombre}</h3>
                  <p className="cat">{producto.categoria}</p>
                  <p className="eta">Llega mañana</p>

                  <div className="controls">
                    <span>Cantidad</span>
                    <div className="qty">
                      <button onClick={() => DisminuirCantidad(producto.id)}>-</button>
                      <span>{qty}</span>
                      <button onClick={() => AumentarCantidad(producto.id)}>+</button>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="cart-price">S/ {(price * qty).toFixed(2)}</div>
              </article>
            );
          })}
        </div>

        <div className="cart-aside">
          <Asside
            totalItems={totalItems}
            totalPrecio={totalPrecio}
            buttonText="Continuar compra"
            onAction={handleContinuar}
          />

          <div className="extra-buttons">
            <button className="btn-red" onClick={handcancelarcompra}>
              Cancelar compra
            </button>
            <button className="btn-orange" onClick={() => alert("Guardado para después (pendiente)")}>
              Guardar para después
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carrito;
