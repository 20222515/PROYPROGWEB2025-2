// src/pages/ListaUsuarios.jsx
import React, { useState } from "react";

function ListaUsuarios() {
  const usuarios = [
    { id: 1, nombre: "Juan Perez", estado: "Activo", correo: "juan.perez@gmail.com", fecha: "20/01/2025", foto: "/MARIO1.jpg" },
    { id: 2, nombre: "Maria Gonzales", estado: "Activo", correo: "maria.g@gmail.com", fecha: "21/01/2025", foto: null },
    { id: 3, nombre: "Marco Aurelio", estado: "Activo", correo: "marco.a@gmail.com", fecha: "22/01/2025", foto: "/GTA1.jpg" },
    { id: 4, nombre: "Alejandro Ruiz", estado: "Inactivo", correo: "alejandro.r@gmail.com", fecha: "20/01/2025", foto: null },
    { id: 5, nombre: "Ana Dias", estado: "Activo", correo: "ana.d@gmail.com", fecha: "23/01/2025", foto: "/MC1.jpg" },
    { id: 6, nombre: "Carlos Lopez", estado: "Activo", correo: "carlos.l@gmail.com", fecha: "24/01/2025", foto: null },
    { id: 7, nombre: "Laura Mendez", estado: "Activo", correo: "laura.m@gmail.com", fecha: "25/01/2025", foto: null },
    { id: 8, nombre: "Diego Torres", estado: "Activo", correo: "diego.t@gmail.com", fecha: "26/01/2025", foto: null },
    { id: 9, nombre: "Sofia Rios", estado: "Activo", correo: "sofia.r@gmail.com", fecha: "27/01/2025", foto: null },
    { id: 10, nombre: "Roberto Vega", estado: "Activo", correo: "roberto.v@gmail.com", fecha: "28/01/2025", foto: null },
    { id: 11, nombre: "Lucia Paredes", estado: "Activo", correo: "lucia.p@gmail.com", fecha: "29/01/2025", foto: null },
    { id: 12, nombre: "Fernando Cruz", estado: "Activo", correo: "fernando.c@gmail.com", fecha: "30/01/2025", foto: null },
  ];

  const [busqueda, setBusqueda] = useState("");

  const usuariosFiltrados = usuarios.filter((u) =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

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
            <th>Fecha de registro</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.length > 0 ? (
            usuariosFiltrados.map((u) => (
              <tr key={u.id}>
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
                  {u.nombre}
                </td>
                <td>{u.fecha}</td>
                <td
                  style={{
                    color: u.estado === "Activo" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {u.estado}
                </td>
                <td>
                  <button className="btn-sec">Desactivar</button>
                  <button className="btn-ver">Ver detalle</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "15px" }}>
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

