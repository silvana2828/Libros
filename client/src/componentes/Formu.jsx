import { useState } from "react";
import Axios from "axios";
export const Formu = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const add = () => {
     Axios.post("http://localhost:3000/register", {
      nombre: nombre,
      correo: correo,
      contrasena: contrasena,
    }).then(() => {
     alert("Usuario registrado");
     });
    };
  return (
    <div className="flex justify-center items-center h-screen">
      <form className=" shadow-lg shadow-[#c1c3e0] p-10 rounded-lg">
        <h1 className=" text-[#354a5f] text-center mb-7 text-3xl font-bold">
          Regístrate
        </h1>
        <div className="w-[350px]">
          <div className="inputDiv">
            <input
              className="inputBox"
              type="text"
              required
              onChange={(event) => {
                setNombre(event.target.value);
              }}
            />
            <label htmlFor="nombre" className="absolute">
              Nombre
            </label>
          </div>
          {/* <div className="inputDiv">
            <input className="inputBox" type="text" required />
            <label className="absolute">Primer apellido</label>
          </div> */}
          <div className="inputDiv">
            <input
              className="inputBox"
              type="email"
              autoComplete="email"
              required
              onChange={(event) => {
                setCorreo(event.target.value);
              }}
            />
            <label className="absolute">Email</label>
          </div>
          <div className="inputDiv">
            <input
              className="inputBox"
              type="password"
              autoComplete="current-password"
              required
              onChange={(event) => {
                setContrasena(event.target.value);
              }}
            />
            <label className="absolute">Contraseña</label>
          </div>
          <div className="flex justify-center ">
            <input
              className=" w-[350px] bg-[#354a5f] text-white items-center justify-center  border-[2px] border-[#5d6d7e] p-3 rounded-md outline-none hover:bg-[#bdc3c7] hover:text-[#354a5f] tracking-[3px] uppercase"
              type="submit"
              value="Registrarme"
              onClick={add}
            />
          </div>
        </div>
      </form>
    </div>
  );
};