// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/context/UserContext.jsx";
import { CartProvider } from "./components/context/CartContext.jsx";
import { CheckoutFlowProvider } from "./components/context/CheckoutContext.jsx";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register.jsx";

import ListaUsuarios from "./pages/ListaUsuarios.jsx";
import UsuarioDetalle from "./pages/UsuarioDetalle.jsx";
import ListaOrdenes from "./pages/ListaOrdenes.jsx";
import DetalleOrden from "./pages/DetalleOrden.jsx";

import Carrito from "./components/Carrito/Carrito.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Pago from "./components/Checkout/CheckoutPago.jsx";
import Pagoqr from "./components/Checkout/PagoQr.jsx";
import PagoTarjeta from "./components/Checkout/PagoTarjeta.jsx";
import PedidoCompleto from "./components/Checkout/CompraCompleta.jsx";

export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <CheckoutFlowProvider>
            <Header />

            <Routes>
              {/* Rutas principales */}
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/producto/:id" element={<ProductoDetalle />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Carrito y checkout */}
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/pago" element={<Pago />} />
              <Route path="/checkout/pago/qr" element={<Pagoqr />} />
              <Route path="/checkout/pago/tarjeta" element={<PagoTarjeta />} />
              <Route path="/checkout/completado" element={<PedidoCompleto />} />

              {/* Panel de administrador */}
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/usuarios" element={<ListaUsuarios />} />
              <Route path="/admin/usuarios/:id" element={<UsuarioDetalle />} />
              <Route path="/admin/usuarios/:id/orden/:ordenId" element={<DetalleOrden />} />
              <Route path="/admin/ordenes" element={<ListaOrdenes />} />
              <Route path="/admin/ordenes/:id" element={<DetalleOrden />} /> {/* ✅ NUEVA RUTA */}

              {/* Vista pública directa de orden */}
              <Route path="/orden/:id" element={<DetalleOrden />} />
            </Routes>

            <Footer />
          </CheckoutFlowProvider>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}
