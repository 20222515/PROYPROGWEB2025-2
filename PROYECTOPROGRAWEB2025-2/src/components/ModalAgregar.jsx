
import "./ModalAgregar.css";
import React, { useState } from "react";


function ModalAgregar({ isOpen, onClose, onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  if (!isOpen) return null; // No renderiza nada si está cerrado
 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !descripcion.trim()) {
    alert("Por favor completa todos los campos.");
    return;
    }

    const nuevaCategoria = {
      id: Date.now(),
      nombre,
      descripcion,
    };

    onAgregar(nuevaCategoria);
    setNombre("");
    setDescripcion("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Nueva Categoria</h2>
        
        <form className="form-modal" onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" placeholder="Nombre de la categoría" value={nombre} onChange={(e) =>  setNombre(e.target.value)}/>

          <label>Descripción:</label>
          <input className="input-description" type="text" placeholder="Descripción de la categoria" value={descripcion} onChange= {(e) =>  setDescripcion(e.target.value)} />

          <div className="modal-buttons">
            <button type="submit" className="btn-guardar" disabled={!nombre.trim() || !descripcion.trim()} >Crear Nueva Categoria</button>
            <button type="button" className="btn-cerrar" onClick={onClose}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAgregar;