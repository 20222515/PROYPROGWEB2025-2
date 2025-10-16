import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../components/context/UserContext";

function ListaUsuarios() {
  const navigate = useNavigate();
  const { usuarios } = useUser(); 
  const [busqueda, setBusqueda] = useState("");

  const usuariosFiltrados = usuarios.filter(
    (u) =>
      u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      u.correo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleVerDetalle = (dni) => {
    navigate(`/admin/usuarios/${dni}`);
  };

  return (
    <main className="admin-page" style={{ padding: "30px 60px" }}>
      <h2 style={{ marginBottom: "20px" }}>Listado de usuarios</h2>

      <input
        type="text"
        placeholder="Buscar un usuario..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="buscador"
        style={{
          padding: "8px 10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          width: "300px",
        }}
      />

      <table
        className="tabla-usuarios"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
          borderRadius: "8px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f3f3f3" }}>
            <th>Nombre completo</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {usuariosFiltrados.length > 0 ? (
            usuariosFiltrados.map((u) => (
              <tr key={u.DNI}>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 0",
                  }}
                >
                  <img
                    src={u.foto ? u.foto : "/unknown.jpg"}
                    alt={u.nombre}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  {u.nombre} {u.apellido}
                </td>
                <td>{u.correo}</td>
                <td>{u.role}</td>
                <td
                  style={{
                    color: u.active ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {u.active ? "Activo" : "Inactivo"}
                </td>
                <td>
                  <button className="btn-sec">Desactivar</button>
                  <button
                    className="btn-ver"
                    onClick={() => handleVerDetalle(u.DNI)}
                  >
                    Ver detalle
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "15px" }}>
                No se encontraron usuarios.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}

export default ListaUsuarios;
