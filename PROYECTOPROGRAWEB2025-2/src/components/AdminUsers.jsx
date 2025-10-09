import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

function AdminUsers({ range, onSelectUser, users }) {

  // Pagination state
  const [page, setPage] = useState(1);
  const pageSize = 7;

  const totalPages = Math.max(1, Math.ceil(users.length / pageSize));

  const pagedUsers = useMemo(() => {
    const start = (page - 1) * pageSize;
    return users.slice(start, start + pageSize);
  }, [page, users]);

  const goTo = (p) => {
    const np = Math.max(1, Math.min(totalPages, p));
    setPage(np);
  };

  // Render a compact page list similar to the mock: show up to first 3, ellipsis, last
  const renderPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // when many pages, show [1,2,3,...,last]
    if (page <= 3) {
      return [1, 2, 3, 'dots', totalPages];
    }
    if (page >= totalPages - 2) {
      return [1, 'dots', totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, 'dots', page, 'dots', totalPages];
  };

  return (
    <aside className="admin-users">
      <div className="users-header">
        <h3>Usuarios registrados</h3>
        {/* Link listo para usar con SPA - la ruta /users puede añadirse posteriormente */}
        <Link to="/admin/usuarios" className="btn-ver-todos">Ver todos los usuarios</Link>
      </div>

      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pagedUsers.map((u) => (
            <tr key={u.id} onClick={() => onSelectUser && onSelectUser(u)} className="fila-usuario">
              <td>
                <div className="user-cell">
                  <img src={u.photo ? u.photo : '/unknown.jpg'} alt={`${u.name} avatar`} className="user-mini-avatar" />
                  <span>{u.name}</span>
                </div>
              </td>
              <td className={u.status === "Activo" ? "activo" : "inactivo"}>{u.status}</td>
              <td>
                <button className="btn-sec">Desactivar</button>
                <button className="btn-ver" onClick={(e) => { e.stopPropagation(); onSelectUser && onSelectUser(u); }}>Ver detalle</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="paginator">
        <button className="page-arrow" onClick={() => goTo(page - 1)} disabled={page === 1}>&lt;</button>

        {renderPageNumbers().map((p, idx) => (
          p === 'dots' ? (
            <span key={"dots-" + idx} className="page-dots">…</span>
          ) : (
            <button
              key={p}
              className={"page" + (p === page ? " active" : "")}
              onClick={() => goTo(p)}
            >{p}</button>
          )
        ))}

        <button className="page-arrow" onClick={() => goTo(page + 1)} disabled={page === totalPages}>&gt;</button>
      </div>
    </aside>
  );
}

export default AdminUsers;
