import React from 'react';
import "./ListaCategorias.css";
import { Navigate } from 'react-router-dom';
function ListaCategorias() {
  return (
    <div className="contenedor">
        <h2>Listado de Categorias</h2>

        <div className="acciones-superiores">
            <input type="text" placeholder="Buscar Categorias....."/>
            <button className="btn-agregar categoria" onClick={()=> Navigate("/admin/productos/listacategorias/modalAgregar")}>Agregar Categoria</button>
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
                <tr>
                    <td>Videojuegos</td>
                    <td>Productos relacionados con videojuegos</td>
                    <td>
                        <button className="btn-editar categoria">Editar</button>
                        <button className="btn-eliminar categoria">Eliminar</button>
                    </td>
                </tr>
                <tr>
                    <td>Consolas</td>
                    <td>Equipos y accesorios</td>
                    <td>
                        <button className="btn-editar">Editar</button>
                        <button className="btn-eliminar">Eliminar</button>
                    </td>
                </tr>
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
    </div>
  );
}

export default ListaCategorias;
