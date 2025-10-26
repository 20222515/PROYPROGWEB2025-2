
import React , { useState, useEffect } from "react";
import "./ModalEditar.css";

function ModalEditar({ isOpen, onClose, onEditar, categoria }) {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    // Cuando se abre el modal o cambia la categoría, precargamos los datos
    useEffect(() => {
        if (categoria) {
            setNombre(categoria.nombre);
            setDescripcion(categoria.descripcion);
        }
    }, [categoria]);

    if (!isOpen) return null;
    const handleSubmit = (e) => {
        e.preventDefault();

    if (!nombre.trim() || !descripcion.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const categoriaEditada = {
      ...categoria, // mantiene el mismo id
      nombre,
      descripcion,
    };

    onEditar(categoriaEditada);
    onClose();
 };

    return (
         <div className="modal-overlay3">
            <div className="modal-container3">
                <h2>Editar Categoria</h2>
        
                <form className="form-modal3" onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre de la categoría" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label>Desccripción:</label>
                    <input className="input-description" type="text" placeholder="Descripción de la categoria" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>

                    <div className="modal-buttons3">
                        <button type="submit" className="btn-guardar">Guardar Cambios</button>
                        <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ModalEditar;

