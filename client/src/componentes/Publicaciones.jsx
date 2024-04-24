import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export const Publicaciones = () => {
  const [publicacionesList, setPublicaciones]=useState([]);


  const getPublicaciones = ()=>{
    Axios.get("http://localhost:3000/publicaciones").then((response)=>{
      setPublicaciones(response.data);
    })
  }
    useEffect(()=>{
    getPublicaciones();
    }, []);
  return (
    <>
      {/* <div className="flex justify-end mt-6 mr-5 gap-2">
        <input
          className="w-[300px] bg-transparent border-[2px] border-[#5d6d7e] p-2 outline-none text-[#5d6d7e] capitalize"
          type="text"
        />
        <input
          className="cursor-pointer hover:font-bold bg-transparent border-[2px] border-[#5d6d7e] p-2 outline-none text-[#5d6d7e] capitalize"
          type="submit"
          value="Buscar"
        />
      </div> */}
      <h1 className="m-10 font-medium text-3xl border-l-2 p-2 border-[#2b3d4f] text-[#354a5f] uppercase">
        Libros gratis
      </h1>
      <div className="grid grid-cols-5 gap-6 ml-10">
        {publicacionesList?.map((val, key) => (
          val.precio == 0 &&(
          <div key={val.id}>
            <Link to={`/libro/${val.id}`}>
              <img
                className="h-[38vh] object-cover shadow shadow-[#5d6d7e] rounded-lg hover:contrast-50  "
                src={val.url}
              />
              <p className="flex  text-[#5d6d7e] text-xl font-bold capitalize">
                {val.titulo}
              </p>
            </Link>
          </div>
          )
        ))}
      </div>
      <h1 className="m-10 font-medium text-3xl border-l-2 p-2 border-[#2b3d4f] text-[#354a5f] uppercase">
        Libros de pago
      </h1>
        <div className="grid grid-cols-5 gap-6 ml-10">
          {publicacionesList?.map((val, key) => (
              val.precio > 0 && (
            <div key={val.id}>
              <Link to={`/libroPa/${val.id}`}>
                <img
                  className="h-[38vh] object-cover shadow shadow-[#5d6d7e] rounded-lg hover:contrast-50  "
                  src={val.url}
                />
                <p className="flex  text-[#5d6d7e] text-xl font-bold capitalize">
                  {val.titulo}
                </p>
              </Link>
            </div>
              )
          ))}
        </div>
    </>
  );
}