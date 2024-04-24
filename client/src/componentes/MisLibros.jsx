import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { VerLibro } from "./VerLibro";
import { Link } from "react-router-dom";
export const MisLibros = ({ allProducts, setAllProducts }) => {
  const [publicacionesList, setPublicaciones] = useState([]);
  const [ID, setId] = useState("");
  const [value, setValue] = useState("");

  // const add = () => {
  //   Axios.post("http://localhost:3000/buscar", {
  //     nombre: value,
  //   }).then((response) => {
  //     console.log(response.data);
  //   });
  // };
  // useEffect(() => {
  //   const getPublicaciones = () => {
  //     Axios.get("http://localhost:3000/publicaciones").then((response) => {
  //       setPublicaciones(response.data);
  //     });
  //   };
  //   if (descargado) {
  //     getPublicaciones();
  //   }
  // }, [descargado]);
  
  // const getPublicaciones = () => {
  //   Axios.get("http://localhost:3000/publicaciones").then((response) => {
  //     setPublicaciones(response.data);
  //   });
  // };
  // useEffect(() => {
  //   getPublicaciones();
  // }, []);
  return (
    <>
      {/* <div className="flex justify-end mt-6 mr-5 gap-2">
        <input
          className="w-[300px] bg-transparent border-[2px] border-[#5d6d7e] p-2 outline-none text-[#5d6d7e] capitalize"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className="cursor-pointer hover:font-bold bg-transparent border-[2px] border-[#5d6d7e] p-2 outline-none text-[#5d6d7e] capitalize"
          type="submit"
          value="Buscar"
          onChange={add}
        />
      </div> */}
      {allProducts.length ? (
        <>
          <h1 className="m-10 font-medium text-3xl border-l-2 p-2 border-[#2b3d4f] text-[#354a5f] uppercase">
            Mis Descargas
          </h1>
          <div className="grid grid-cols-5 gap-6 ml-10">
            {allProducts.map((product, key) => (
              product.precio == 0 &&(
              <div key={product.id}>
                <img
                  className="h-[38vh] object-cover shadow shadow-[#5d6d7e] rounded-lg hover:contrast-50  "
                  src={product.url}
                />
                <p className="flex  text-[#5d6d7e] text-xl font-bold capitalize">
                  {product.titulo}
                </p>
              </div>
              )
            ))}
          </div>
          <h1 className="m-10 font-medium text-3xl border-l-2 p-2 border-[#2b3d4f] text-[#354a5f] uppercase">
            Mis compras
          </h1>
          <div className="grid grid-cols-5 gap-6 ml-10">
            {allProducts.map(
              (product, key) =>
                product.precio > 0 && (
                  <div key={product.id}>
                    {/* onClick={() => setId(val.ID)} */}
                      <img
                        className="h-[38vh] object-cover shadow shadow-[#5d6d7e] rounded-lg hover:contrast-50  "
                        src={product.url}
                      />
                      <p className="flex  text-[#5d6d7e] text-xl font-bold capitalize">
                        {product.titulo}
                      </p>
                  </div>
                )
            )}
          </div>
        </>
      ) : (
        <h1 className=" text-center mt-10 text-[#5d6d7e] text-8xl font-bold">
          No tienes libros
        </h1>
      )}
    </>
  );
};
