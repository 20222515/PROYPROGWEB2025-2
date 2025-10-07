// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        {/* The /users route can be added later; currently links can point to /users */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
