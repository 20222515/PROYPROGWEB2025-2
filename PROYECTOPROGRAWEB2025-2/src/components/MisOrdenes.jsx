
import React from "react";
import "./MisOrdenes.css";  
import fotoPerfil from "../assets/I6.webp";


function MisOrdenes() {
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
            <tr>
              <td>1233</td>
              <td>Mario Aurelio</td>
              <td>20/01/2025</td>
              <td>$199.00</td>
              <td>Entregado</td>
              <td><button className="btn-verdetalle">Ver detalles</button></td>
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

export default MisOrdenes;