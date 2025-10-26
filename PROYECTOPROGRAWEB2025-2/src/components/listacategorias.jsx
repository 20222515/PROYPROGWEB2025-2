import React, { useState } from "react";
import "./ListaCategorias.css";
import ModalAgregar from "./ModalAgregar";
import categorias from "../data/listacategorias";


function ListaCategorias() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [listacategorias, setListaCategorias] = useState(categorias);  
    const handleAgregarCategoria = (nuevaCategoria) => {
    setListaCategorias([...listacategorias, nuevaCategoria]);
    };  
    

  return (
    <div className="contenedor">
        <h2>Listado de Categorias</h2>

        <div className="acciones-superiores">
            <input type="text" placeholder="Buscar Categorias....."/>
            <button className="btn-agregar categoria" onClick={() => setIsModalOpen(true)}>Agregar Categoria</button>
        </div>

        <div className="contenedor2">
            <table className="tabla">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listacategorias.map((categoria) => (
                <tr key={categoria.id}>
                    <td>{categoria.nombre}</td>
                    <td>{categoria.descripcion}</td>
                    <td>
                        <button className="btn-editar categoria">Editar</button>
                        <button className="btn-eliminar categoria">Eliminar</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <div className="paginacion">
           <button>&laquo;</button>
           <button className="activo">1</button>
           <button>2</button>
           <button>3</button>
           <button>&raquo;</button>
        </div>

        <ModalAgregar
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAgregar={handleAgregarCategoria}
      />
    </div>
  );
}

export default ListaCategorias;
