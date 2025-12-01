
import React from "react";
import "./Modaldetalleorden.css";

function ModalOrden({ orden, onClose }) {
  if (!orden) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        <h2>Detalles de la Orden</h2>
        <p><strong>ID:</strong> {orden.id}</p>
        <p><strong>Usuario:</strong> {orden.usuario}</p>
        <p><strong>Fecha:</strong> {orden.fecha}</p>
        <p><strong>Total:</strong> ${Number(orden.total).toFixed(2)}</p>
        <p><strong>Estado:</strong> {orden.estado}</p>
        <button className="btn-cerrar" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ModalOrden;