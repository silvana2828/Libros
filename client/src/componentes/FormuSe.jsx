import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const FormuSe = () => {

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [rol, setRol] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredendtials = true;
  const add = () => {
    axios
      .post("http://localhost:3000/inicioSesion", {
        correo: correo,
        contrasena: contrasena,
        rol: rol,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.Status === "SuccessAdmin") {
          console.log(res.data);
          alert("Ingrese Administrador");
          navigate("/publicar");
        } else if (res.data.Status === "Success") {
          console.log(res.data);
          alert("Ingreso correcto");
          navigate("/publicaciones");
        } else {
          console.log(res.data.Message);
          alert("Error: " + (res.data.Message || "No se pudo iniciar sesión"));
        }
      })
      .catch((error) => {
        console.log(error);
         alert("Error: No se pudo iniciar sesión");
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form className=" shadow-lg shadow-[#c1c3e0] p-10 rounded-lg">
          <h1 className=" text-[#354a5f] text-center mb-7 text-3xl font-bold">
            Iniciar sesión
          </h1>
          <div className="w-[350px]">
            <div className="inputDiv">
              <input
                className="inputBox"
                type="text"
                name="correo"
                id="correo"
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
                name="contrasena"
                id="contrasena"
                required
                autoComplete="current-password"
                onChange={(event) => {
                  setContrasena(event.target.value);
                }}
              />
              <label className="absolute">Contraseña</label>
            </div>
            <div className="inputDiv">
              <select
                className="inputBox"
                onChange={(event) => {
                  setRol(event.target.value);
                }}
              >
                <option value="Administrador">Administrador</option>
                <option value="Usuario">Usuario</option>
              </select>
              <label className="absolute">Rol</label>
            </div>
            <div className="flex justify-center ">
              <input
                className=" w-[350px] bg-[#354a5f] text-white items-center justify-center  border-[2px] border-[#5d6d7e] p-3 rounded-md outline-none hover:bg-[#bdc3c7] hover:text-[#354a5f] tracking-[3px] uppercase"
                type="submit"
                value="Iniciar sesión"
                onClick={(e) => {
                  e.preventDefault();
                  add();
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};