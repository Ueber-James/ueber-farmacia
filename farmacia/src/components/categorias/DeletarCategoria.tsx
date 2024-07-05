import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import Categoria from '../../models/categorias'
import { buscar, deletar } from '../../services/services'

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()


    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {

                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {

"deu ruim"
            }
        }
    }



    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias");
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
              headers: {

              },
            });

            alert('Categoria apagado com sucesso')

        } catch (error) {
            alert('Erro ao apagar o Categoria')
        }

        retornar()
    }
  return (
    <>
      <div className="container w-1/3 mx-auto h-screen mt-10 items-center justify-center ">
        <h1 className="text-4xl text-center my-4">Deletar categoria</h1>

        <p className="text-center font-semibold mb-4">
          Você tem certeza de que deseja apagar o categoria a seguir?
        </p>
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96  items-center justify-center">
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Categoria
            </h5>

            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Nome:
              {categoria.nome}
            </p>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Descroção:
              {categoria.descricao}
            </p>
          </div>
          <div className="p-6 pt-0 flex gap-4">
            <button
              onClick={retornar}
              className="bg-blue-500 w-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50
              disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  text-white shadow-md  hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >
              Não
            </button>

            <button
              onClick={deletarCategoria}
              className="bg-red-700 w-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none
              disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  text-white shadow-md  hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >
              Sim
            </button>
          </div>
        </div>
      </div>
    </>

   
  );
}

export default DeletarCategoria;