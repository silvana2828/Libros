import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate()
  const {state} = useLocation();
  console.log(state)
  
  const onLogout = ()=>{
    navigate("/inicio")
  }
  return (
    <>
      {state?.logged?(
        <main className="bg-[#bdc3c7] text-[#2b3d4f]">
          <img src="" />
          <h1 className="uppercase text-3xl font-extrabold text-center p-3">
            Tu libro:)
          </h1>
          <div className="flex justify-between px-16">
            <div className="flex gap-4 uppercase">
              <Link to="/inicio">
                <h1 className=" cursor-pointer hover:font-bold">Inicio</h1>
              </Link>
              <Link to="/misLibros">
                <h1 className=" cursor-pointer hover:font-bold">Mis libros</h1>
              </Link>
              <Link to="/publicaciones">
                <h1 className=" cursor-pointer hover:font-bold">
                  Publicaciones
                </h1>
              </Link>
              <Link to="/publicar">
                <h1 className=" cursor-pointer hover:font-bold">Publicar</h1>
              </Link>
              <Link to="/ventas">
                <h1 className=" cursor-pointer hover:font-bold">Ventas</h1>
              </Link>
            </div>
            <div className="flex justify-end items-end gap-4">
              <span className="uppercase font-thin">{state?.correo}</span>
              <button className=" uppercase cursor-pointer hover:font-bold" onClick={onLogout}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </main>
      ):(
          <main className="bg-[#bdc3c7] text-[#2b3d4f]">
          <img src="" />
          <h1 className="uppercase text-3xl font-extrabold text-center p-3">
            Tu libro:)
          </h1>
          <div className="flex justify-between px-16">
            <div className="flex gap-4 uppercase">
              <Link to="/inicio">
                <h1 className=" cursor-pointer hover:font-bold">Inicio</h1>
              </Link>
              <Link to="/misLibros">
                <h1 className=" cursor-pointer hover:font-bold">Mis libros</h1>
              </Link>
              <Link to="/publicaciones">
                <h1 className=" cursor-pointer hover:font-bold">
                  Publicaciones
                </h1>
              </Link>
              <Link to="/publicar">
                <h1 className=" cursor-pointer hover:font-bold">Publicar</h1>
              </Link>
              <Link to="/ventas">
                <h1 className=" cursor-pointer hover:font-bold">Ventas</h1>
              </Link>
            </div>
            <div className="flex justify-end items-end gap-4">
              <span className="uppercase font-thin">{state?.correo}</span>
              <button className=" uppercase cursor-pointer hover:font-bold">
                Cerrar sesión
              </button>
            </div>
          </div>
        </main>
      )}
      <Outlet />
    </>
  );
};
