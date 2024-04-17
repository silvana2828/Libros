import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="flex flex-col gap-2 h-screen items-center mt-[10rem]">
      <div className=" shadow-lg shadow-[#bdc3c7] p-10 rounded-lg bg-[#f7f7f7]">
        <h1 className="text-5xl text-[#2b3d4f] mb-6">
          Bienvenido a Tu libro:)
        </h1>
        <p className="w-[60vh]">
          Sumérgete en un mundo de historias fascinantes, conocimiento profundo
          y aventuras inolvidables. En nuestra plataforma encontrarás una vasta
          selección de libros que te permitirán expandir tu horizonte.
        </p>
        <div className="w-[10vh] h-[2%] bg-[#2b3d4f] text-center my-3"></div>
        <div className="flex gap-5 justify-end">
          <Link to="/iniciar">
            <div className=" border-2 border-[#2b3d4f] p-2 rounded-xl cursor-pointer hover:bg-[#2b3d4f] hover:text-white uppercase">
              Iniciar Sesión
            </div>
          </Link>
          <Link to="/registrar">
            <div className=" border-2 border-[#2b3d4f] p-2 rounded-xl cursor-pointer hover:bg-[#2b3d4f] hover:text-white uppercase">
              Registrarme
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
