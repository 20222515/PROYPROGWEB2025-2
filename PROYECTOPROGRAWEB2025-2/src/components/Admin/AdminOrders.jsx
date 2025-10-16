import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useOrders } from "../context/OrderContext";

function AdminOrders({ range }) {
  const orders = useOrders().ordenes;
  
  const [page, setPage] = useState(1);
  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(orders.length / pageSize));

  const paged = useMemo(() => {
    const s = (page - 1) * pageSize;
    return orders.slice(s, s + pageSize);
  }, [page, orders]);

  const goTo = (p) => setPage(Math.max(1, Math.min(totalPages, p)));

  const renderPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 3) return [1, 2, 3, "dots", totalPages];
    if (page >= totalPages - 2) return [1, "dots", totalPages - 2, totalPages - 1, totalPages];
    return [1, "dots", page, "dots", totalPages];
  };

  return (
    <section className="admin-orders">
      <div className="orders-header">
        <h3>Listado de órdenes</h3>
        <div className="orders-actions">
          <Link to="/products" className="btn-ver-productos">Ver productos</Link>
          <Link to="/orders" className="btn-ver-todas">Ver todas las ordenes</Link>
        </div>
      </div>

      <table className="tabla-ordenes">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Usuario</th>
            <th>Fecha de orden</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {paged.map((o) => (
            <tr key={o.id}>
              <td className="link-id">{o.id}</td>
              <td>{o.user}</td>
              <td>{o.date}</td>
              <td>S/ {o.total}.00</td>
              <td className="estado">{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="paginator">
        <button className="page-arrow" onClick={() => goTo(page - 1)} disabled={page === 1}>&lt;</button>

        {renderPageNumbers().map((p, idx) => (
          p === 'dots' ? (
            <span key={"dots-" + idx} className="page-dots">…</span>
          ) : (
            <button
              key={p}
              className={"page" + (p === page ? " active" : "")}
              onClick={() => goTo(p)}
            >{p}</button>
          )
        ))}

        <button className="page-arrow" onClick={() => goTo(page + 1)} disabled={page === totalPages}>&gt;</button>
      </div>
    </section>
  );
}

export default AdminOrders;
