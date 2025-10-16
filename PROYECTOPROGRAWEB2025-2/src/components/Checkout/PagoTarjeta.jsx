import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import Asside from "../asside.jsx";
import "./Checkout.css";
import visaCard from "../../assets/Tarjeta.gif";


export default function PaymentCardPage() {
  const navigate = useNavigate();
  const { carrito, vaciarCarrito } = useCart();

  const items = Array.isArray(carrito) ? carrito : [];
  const totalItems = items.reduce((s, it) => s + (it.cantidad ?? 1), 0);
  const total = items.reduce(
    (s, it) => s + it.precio * (it.cantidad ?? 1),
    0
  );

  const [form, setForm] = useState({
    nombre: "",
    numero: "",
    expiracion: "",
    cvv: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.numero || !form.expiracion || !form.cvv) {
      alert("Por favor completa todos los campos de pago");
      return;
    }
            const direccion = JSON.parse(localStorage.getItem("direccionEnvio") || "{}");
        const items = Array.isArray(carrito) ? carrito : [];
        const subtotal = items.reduce((s, it) => s + (it.precio ?? 0) * (it.cantidad ?? 1), 0);
        const order = {
        items,
        subtotal,
        total: subtotal,        // ajusta si sumas delivery, etc.
        direccion,
        createdAt: Date.now(),
        };
        localStorage.setItem("lastOrder", JSON.stringify(order));

        vaciarCarrito();
        navigate("/checkout/completado");
  };

  return (
    <section className="checkout container">
      <h1 className="checkout__title">Checkout</h1>

      <div className="page-grid">
        <main className="main-content">
          <h2>Método de pago</h2>
          <img src={visaCard} alt="Tarjeta Visa" className="card-image" />


          <form className="card-form" onSubmit={handleSubmit}>
            <div className="field">
              <label>Nombre del titular</label>
              <input
                name="nombre"
                placeholder="Nombre completo"
                value={form.nombre}
                onChange={onChange}
              />
            </div>

            <div className="field">
              <label>Número de tarjeta</label>
              <input
                name="numero"
                placeholder="XXXX XXXX XXXX XXXX"
                maxLength="19"
                value={form.numero}
                onChange={onChange}
              />
            </div>

            <div className="grid2">
              <div className="field">
                <label>Fecha de expiración</label>
                <input
                  name="expiracion"
                  placeholder="MM/AA"
                  value={form.expiracion}
                  onChange={onChange}
                />
              </div>
              <div className="field">
                <label>CVV</label>
                <input
                  name="cvv"
                  placeholder="***"
                  maxLength="3"
                  value={form.cvv}
                  onChange={onChange}
                />
              </div>
            </div>

          </form>
        </main>

        <Asside
          totalItems={totalItems}
          totalPrecio={total}
          buttonText="Completar pago"
          onAction={handleSubmit}
        />
      </div>
    </section>
  );
}
