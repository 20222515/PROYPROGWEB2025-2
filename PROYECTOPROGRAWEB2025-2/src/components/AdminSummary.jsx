import React from "react";

function AdminSummary({ range }) {
  // Placeholder data — in a real app this would be fetched by range
  const data = {
    orders: 68,
    newUsers: 12,
    revenue: 2348,
  };

  return (
    <section className="admin-summary">
      <div className="summary-card">
        <h3>Órdenes</h3>
        <div className="valor">{data.orders}</div>
      </div>
      <div className="summary-card">
        <h3>Usuarios nuevos</h3>
        <div className="valor">{data.newUsers}</div>
      </div>
      <div className="summary-card">
        <h3>Ingresos totales</h3>
        <div className="valor">S/ {data.revenue}.00</div>
      </div>
    </section>
  );
}

export default AdminSummary;
