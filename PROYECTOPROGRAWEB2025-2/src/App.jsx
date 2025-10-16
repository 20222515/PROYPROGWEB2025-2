// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/context/UserContext.jsx";
import { CartProvider } from "./components/context/CartContext.jsx";
import { CheckoutFlowProvider } from "./components/context/CheckoutContext.jsx";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin/Admin";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import LoginPage from "./pages/Login/Login";
import ListaUsuarios from "./data/usuarios.js";
import Carrito from "./components/Carrito/carrito.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Pago from "./components/Checkout/CheckoutPago.jsx";
import Pagoqr from "./components/Checkout/PagoQr.jsx";
import PagoTarjeta from "./components/Checkout/PagoTarjeta.jsx";
import PedidoCompleto from "./components/Checkout/CompraCompleta.jsx";
import RegisterPage from "./pages/Register/Register.jsx";
import PerfilPage from "./pages/PerfilUsuario/PerfilUsuario.jsx";
import DetalleOrdenPage from "./pages/DetalleOrden/DetalleOrden.jsx";
export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
        <CheckoutFlowProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<ProductoDetalle />} />
            <Route path="/admin/usuarios" element={<ListaUsuarios />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/pago" element={<Pago />} />
            <Route path="/checkout/pago/qr" element={<Pagoqr />} />
            <Route path="/checkout/pago/tarjeta" element={<PagoTarjeta />} />
            <Route path="/checkout/completado" element={<PedidoCompleto />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/me" element={<PerfilPage />} />
           <Route path="/orden/:id" element={<DetalleOrdenPage />} />
          </Routes>
          <Footer />
          </CheckoutFlowProvider>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>

  );
}

