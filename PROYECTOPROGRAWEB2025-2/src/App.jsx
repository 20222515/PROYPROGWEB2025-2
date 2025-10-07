import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Productos from "./pages/Productos"; // 👈 Importamos la nueva página

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
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

        {/* Página de productos */}
        <Route
          path="/productos"
          element={<Productos />}
        />
      </Routes>
    </Router>
  );
}

export default App;
