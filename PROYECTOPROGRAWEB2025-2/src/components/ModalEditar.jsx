
import React from 'react';
import "./ModalEditar.css";

function ModalEditar({ isOpen, onClose }) {
    if(!isOpen) return null;

    return (
         <div className="modal-overlay">
            <div className="modal-container">
                <h2>Editar Categoria</h2>
        
                <form className="form-modal">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre de la categoría" />

                    <label>Desccripción:</label>
                    <input className="input-description" type="text" placeholder="Descripción de la categoria" />

                    <div className="modal-buttons">
                        <button type="submit" className="btn-guardar">Guardar Cambios</button>
                        <button type="button" className="btn-cerrar" onClick={onClose}>Cerrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ModalEditar;

