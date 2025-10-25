import React from "react";
import "./ModalAgregar.css";

function ModalAgregar({ isOpen, onClose }) {
  if (!isOpen) return null; // No renderiza nada si está cerrado

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Agregar Categoría</h2>
        
        <form className="form-modal">
          <label>Nombre:</label>
          <input type="text" placeholder="Nombre de la categoría" />

          <div className="modal-buttons">
            <button type="submit" className="btn-guardar">Guardar</button>
            <button type="button" className="btn-cerrar" onClick={onClose}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAgregar;