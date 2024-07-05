import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriasForm from "./components/categorias/CategoriasForm";
import ListaCategorias from "./components/categorias/ListaCategorias";
import DeletarCategoria from "./components/categorias/DeletarCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastroCategoria" element={<CategoriasForm />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          <Route path="/editarCategoria/:id" element={<CategoriasForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
