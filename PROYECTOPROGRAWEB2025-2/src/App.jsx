import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle"; // 👈 nuevo import


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner />
              <CategoryList />
              <ProductList />
              <Footer />
            </>
          }
        />
        <Route path="/productos" element={<Productos />} />

        {/* 👇 Nueva ruta para detalle */}
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        
      </Routes>
    </Router>
  );
}

export default App;
