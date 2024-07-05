// src/components/NavBar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-center py-4'">
      <div className="container flex justify-between text-lg">
        <h1 className="text-white text-2xl">Farmácia</h1>

        <div className="flex gap-4">

          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
          <Link to="/cadastroCategoria" className="hover:underline">
            Cadastrar Categoria
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

