import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios  from "axios";
export function VerLibro({allProducts, setAllProducts}) {
  const { id } = useParams();
  const [espera, setEspera] = useState({});
  
  const onAddProducts = espera =>{
    setAllProducts([...allProducts, espera])
  }; console.log(allProducts)
  
  const obtener =()=>{
    Axios.get(`http://localhost:3000/libros/${id}`).then((response)=>{
      setEspera(response.data)
    });
  }
  useEffect( ()=>{
    obtener();
  },[id])

   const mensaje = ()=>{
    alert("Has descargado exitosamente este libro")
   }
  return (
    <>
      <div className="flex justify-around h-screen mt-20">
        <div className="flex flex-col gap-3 ml-6 ">
          <img
            className="h-[50%] w-auto shadow-lg shadow-gris-oscuro"
            src={espera.url}
          />
          <h1 className="text-center text-xl text-azul-medio">
            <span className="font-bold">$</span>
            {espera && espera.precio}
          </h1>
          <a
            href={espera.pdf}
            download
            className="bg-transparent text-center border-[2px] border-[#5d6d7e] p-3 rounded-md outline-none hover:bg-[#bdc3c7] text-[#354a5f] tracking-[3px] uppercase"
            onClick={()=> onAddProducts(espera)}
          >
            Descargar
          </a>
        </div>
        <div className="w-[60%] p-7 ">
          <h1 className=" mb-7 text-2xl text-azul-oscuro border-l-2 border-gris-oscuro pl-2 capitalize">
            {espera && espera.titulo}
          </h1>
          <p className=" border-b p-4 border-azul-oscuro">
            {espera && espera.descripcion}
          </p>
        </div>
      </div>
    </>
  );
}