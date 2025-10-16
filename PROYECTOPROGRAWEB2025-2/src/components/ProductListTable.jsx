import React from "react";
import productos from "../data/productos";
import "./ProductListTable.css";

const ProductListTable = () => {
  return (
    <div className="product-list-table">
      <h2>Listado de productos</h2>
      <div className="table-actions">
        <input type="text" placeholder="Buscar un producto..." className="search-input" />
        <button className="btn-green">Buscar</button>
        <button className="btn-grey">Categorías</button>
        <button className="btn-green">Agregar producto</button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Presentación</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod.id}>
              <td>#{prod.id}</td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {(() => {
                    const imgPath = prod.imagen
                      ? (prod.imagen.startsWith("/") || prod.imagen.startsWith("http") ? prod.imagen : `/${prod.imagen}`)
                      : "/unknown.jpg";
                    return (
                      <img
                        src={imgPath}
                        alt={prod.nombre}
                        className="product-img"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/unknown.jpg";
                        }}
                      />
                    );
                  })()}
                  <span>{prod.nombre}</span>
                </div>
              </td>
              <td>{prod.presentacion || ""}</td>
              <td>{prod.descripcion}</td>
              <td><b>{prod.categoria}</b></td>
              <td>{prod.stock ?? ""}</td>
              <td>
                <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                  <button className="btn-edit" title="Editar producto" aria-label="Editar">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </button>
                  <button className="btn-delete" title="Eliminar producto" aria-label="Eliminar">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Paginación (estructura lista) */}
      <div className="pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>10</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default ProductListTable;
