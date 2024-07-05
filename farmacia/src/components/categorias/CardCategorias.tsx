import React from "react";
import { Link } from "react-router-dom";
import Categoria from "../../models/categorias";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <>
      {/* <div className="h-screen flex grid grid-cols-3 justify-center items-center"> */}
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96  ">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Categoria
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {categoria.nome}
          </p>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {categoria.descricao}
          </p>
        </div>
        <div className="p-6 pt-0 flex gap-4">
          <Link
            to={`/editarCategoria/${categoria.id}`}
            className="bg-blue-500 w-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50
              disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  text-white shadow-md  hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletarCategoria/${categoria.id}`}
            className="bg-red-700 w-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none
              disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  text-white shadow-md  hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          >
            <button>Excluir</button>
          </Link>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default CardCategorias;
