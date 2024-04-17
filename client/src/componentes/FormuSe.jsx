import React, { useState } from 'react'
import axios from 'axios';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
export const FormuSe = () => {
  const navigate = useNavigate()
  const {correo, contrasena, onInputChange, onResetForm}=
    useForm({
      correo: '',
      contrasena: '',
    })
    const onLogin= (e)=>{
      e.preventDefaul();
    navigate("/publicaciones",{
      replace: true,
      state: {
        logged:true,
        correo,
      },
      });
    }
  // const [correo, setCorreo]= useState("");
  // const [contrasena, setContrasena] = useState("");

  //     const add = () => {
  //       axios.post("http://localhost:3000/inicio1", {
  //         correo: correo,
  //         contrasena: contrasena,
  //       }).then(() => {
  //         alert("Inicio de sesión correcto");
  //       });
  //     };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form className=" shadow-lg shadow-[#c1c3e0] p-10 rounded-lg" onSubmit={onLogin}>
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
                value={correo}
                autoComplete="email"
                required
                // onChange={(event) => {
                //   setCorreo(event.target.value);
                // }}
              />
              <label className="absolute">Email</label>
            </div>
            <div className="inputDiv">
              <input
                className="inputBox"
                type="password"
                name="contrasena"
                id="contrasena"
                value={contrasena}
                required
                autoComplete="current-password"
                // onChange={(event) => {
                //   setContrasena(event.target.value);
                // }}
              />
              <label className="absolute">Contraseña</label>
            </div>
            {/* <div className="inputDiv">
              <select className="inputBox">
                <option value="mx">Administrador</option>
                <option value="co">Usuario</option>
              </select>
              <label className="absolute">Rol</label>
            </div> */}
            <div className="flex justify-center ">
              <input
                className=" w-[350px] bg-[#354a5f] text-white items-center justify-center  border-[2px] border-[#5d6d7e] p-3 rounded-md outline-none hover:bg-[#bdc3c7] hover:text-[#354a5f] tracking-[3px] uppercase"
                type="submit"
                value="Iniciar sesión"
                // onClick={add}
                  onClick={onLogin}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}