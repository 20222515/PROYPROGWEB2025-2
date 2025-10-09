// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import LoginPage from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
