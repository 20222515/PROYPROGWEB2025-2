import React, { useState } from "react";
import "../components/AdminDashboard.css";
import AdminSummary from "../components/AdminSummary";
import AdminUsers from "../components/AdminUsers";
import AdminUserDetail from "../components/AdminUserDetail";
import AdminOrders from "../components/AdminOrders";
import DateRangePicker from "../components/DateRangePicker";

function Admin() {
  const today = new Date().toISOString().slice(0, 10);
  const [range, setRange] = useState({ from: today, to: today });

  // Users data lifted to the page so both list and detail share it
  const users = [
    { id: 1, name: "Juan Perez", status: "Activo", email: "juan.perez@gmail.com", registered: "20/01/2025", photo: '/MARIO1.jpg' },
    { id: 2, name: "Maria Gonzales", status: "Activo", email: "maria.g@gmail.com", registered: "21/01/2025", photo: null },
    { id: 3, name: "Marco Aurelio", status: "Activo", email: "marco.a@gmail.com", registered: "22/01/2025", photo: '/GTA1.jpg' },
    { id: 4, name: "Alejandro Ruiz", status: "Inactivo", email: "alejandro.r@gmail.com", registered: "20/01/2025", photo: null },
    { id: 5, name: "Ana Dias", status: "Activo", email: "ana.d@gmail.com", registered: "23/01/2025", photo: '/MC1.jpg' },
    { id: 6, name: "Carlos Lopez", status: "Activo", email: "carlos.l@gmail.com", registered: "24/01/2025", photo: null },
    { id: 7, name: "Laura Mendez", status: "Activo", email: "laura.m@gmail.com", registered: "25/01/2025", photo: null },
    { id: 8, name: "Diego Torres", status: "Activo", email: "diego.t@gmail.com", registered: "26/01/2025", photo: null },
    { id: 9, name: "Sofia Rios", status: "Activo", email: "sofia.r@gmail.com", registered: "27/01/2025", photo: null },
    { id: 10, name: "Roberto Vega", status: "Activo", email: "roberto.v@gmail.com", registered: "28/01/2025", photo: null },
    { id: 11, name: "Lucia Paredes", status: "Activo", email: "lucia.p@gmail.com", registered: "29/01/2025", photo: null },
    { id: 12, name: "Fernando Cruz", status: "Activo", email: "fernando.c@gmail.com", registered: "30/01/2025", photo: null },
  ];

  const [selectedUser, setSelectedUser] = React.useState(users[0] || null);

  return (
    <main className="admin-page">
      <div className="admin-top">
        <h2>Dashboard</h2>
        <DateRangePicker range={range} onChange={setRange} />
      </div>

      <AdminSummary range={range} />

      <div className="admin-panels">
        <div className="users-detail-row">
          <AdminUsers range={range} onSelectUser={setSelectedUser} users={users} />
          <AdminUserDetail user={selectedUser} users={users} onChangeUser={setSelectedUser} />
        </div>

        <AdminOrders range={range} />
      </div>
    </main>
  );
}

export default Admin;
