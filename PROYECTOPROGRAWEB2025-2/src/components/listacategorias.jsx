import React, { useState } from "react";
import "./ListaCategorias.css";
import ModalAgregar from "./ModalAgregar";
import categorias from "../data/listacategorias";
import ModalConfirmar from "./ModalConfirmar.jsx";
import ModalEditar from "./ModalEditar.jsx";


function ListaCategorias() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [listacategorias, setListaCategorias] = useState(categorias);  
    const handleAgregarCategoria = (nuevaCategoria) => {
    setListaCategorias([...listacategorias, nuevaCategoria]);
    };  

    //ELIMINAR CATEGORIA
    const [categoriaAEliminar, setCategoriaAEliminar] = useState(null);
    const handleEliminarCategoria = (id) => {
    setCategoriaAEliminar(id);
    };
    const confirmarEliminar = () => {
    setListaCategorias(listacategorias.filter((cat) => cat.id !== categoriaAEliminar));
    setCategoriaAEliminar(null);
    };

    //EDITAR CATEGORIA
    const [categoriaAEditar, setCategoriaAEditar] = useState(null);
    const handleEditarCategoria = (categoria) => {
    setCategoriaAEditar(categoria);
    };

    const confirmarEdicion = (categoriaEditada) => {
    setListaCategorias(
    listacategorias.map((cat) =>
      cat.id === categoriaEditada.id ? categoriaEditada : cat));
    setCategoriaAEditar(null);
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
                        <button className="btn-editar categoria" onClick={() => handleEditarCategoria(categoria)}>Editar</button>
                        <button className="btn-eliminar categoria" onClick={() => handleEliminarCategoria(categoria.id)}>Eliminar</button>
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

        <ModalConfirmar
        isOpen={!!categoriaAEliminar}
        onClose={() => setCategoriaAEliminar(null)}
        onConfirm={confirmarEliminar}
       />

        <ModalEditar
        isOpen={!!categoriaAEditar}
        onClose={() => setCategoriaAEditar(null)}
        onEditar={confirmarEdicion}
        categoria={categoriaAEditar}
        />
    </div>
  );
}

export default ListaCategorias;
