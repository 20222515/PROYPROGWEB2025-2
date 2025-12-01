
import React, { useState } from "react";
import "./MisOrdenes.css";  
import ModalOrden from "./Modaldetalleorden.jsx";
import fotoPerfil from "../assets/I6.webp";


function MisOrdenes() {

  const [ordenSeleccionada, setOrdenSeleccionada] = useState(null);
  const handleVerDetalles = (orden) => {
  setOrdenSeleccionada(orden);
  };


  const [busquedaOrden, setBusquedaOrden] = useState('');
  const handleBusquedaOrden = (e) => {
  setBusquedaOrden(e.target.value);
  };

  const ordenes = [
  { id: 1231, usuario: 'Juan', fecha: '2025/01/20', total: 50.0, estado: 'Entregado' },
  { id: 1233, usuario: 'Mario Aurelio', fecha: '2025/01/20', total: 199.0, estado: 'Entregado' },
  // más órdenes...
  ];

  const ordenesFiltradas = ordenes.filter((orden) =>
  orden.id.toString().includes(busquedaOrden)
  );


  return (
    <div className="dashboard">

        <h1>Hola Juan!</h1>
        <div className="usuario-contenedor">
            <div className="usuario-info2">
                <h3><strong>Datos Personales</strong></h3>
                <p><strong>Nombre:</strong> Juan Perez</p>
                <p><strong>Correo:</strong> juan.perez@email.com</p>
                <p><strong>Fecha de registro:</strong> 20/01/2025</p>
            </div>
            <div className="usuario-direccion">
                <h3><strong>Dirección de envío</strong></h3>
                <p>Av La Molina 123444</p>
                <p>Lima-Lima</p>
                <p>Celular de Contacto: 942600818</p>
                

            </div>
            <div className="resumen">
                <div className="resumen-box">
                    <h3>Órdenes: 12</h3>
                </div>
                    <div className="resumen-box">
                    <h3>Monto ahorrado: $529 </h3>
                </div>
            </div>

            <div className="container-imagen">
                <img src={fotoPerfil} alt="Foto de perfil" />
            </div>

        </div>
      <div className="acciones-superiores">
        <input
        type="text"
        placeholder="Buscar por número de orden..."
        value={busquedaOrden}
        onChange={handleBusquedaOrden}
        style={{ marginBottom: '1rem', marginTop: '1rem', padding: '8px', width: '1400px' }}
        />
      </div>

      <div className="tabla-ordenes">
        <h3>Historial de órdenes</h3>
        <table>
          <thead>
            <tr>
              <th>#Orden</th>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ordenesFiltradas.map((orden) => (
            <tr key = {orden.id}>
               <td>{orden.id}</td>
               <td>{orden.usuario}</td>
               <td>{orden.fecha}</td>
               <td>${Number(orden.total).toFixed(2)}</td>
               <td>{orden.estado}</td>
               <td><button className="btn-verdetalle" onClick={() => handleVerDetalles(orden)}>Ver detalles</button></td>
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
      <ModalOrden orden={ordenSeleccionada} onClose={() => setOrdenSeleccionada(null)} />
    </div>
    
    

  );
}

export default MisOrdenes;