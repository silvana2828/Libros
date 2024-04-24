import { useState } from "react";
import Axios from "axios";

export const Publicar = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [url, setUrl] = useState("")
  const [file, setFile] = useState("");

  const upload = () =>{
    const formData = new FormData()
    formData.append("titulo", titulo),
    formData.append("descripcion", descripcion),
    formData.append("precio", precio),
    formData.append("url", url),
    formData.append("file", file)
    console.log(formData)
    Axios.post('http://localhost:3000/create', formData).then((response)=>{
      console.log(response)
    }).then(res=> console.log(res)).catch(err => console.log(err))
  }

  //   setPdf(event.target.files[0]);
  //   alert("escogiste un archivo")
  //   };

  // const UploadPDF = () => {
  // const [pdf, setPdf] = useState(null);

  // const handlePdfChange = (event) => {
  //   setPdf(event.target.files[0]);
  // };
  // }
  // const funcionImag = ({archivo}) =>{
  //  const guardar =  Axios.post("http://localhost:3000/images/single", {
  //     archivo : archivo
  //   }
  // );
  //     console.log(guardar) 
  //     setFile(guardar);
  // }

  // const add = () => {
  //   Axios.post("http://localhost:3000/create", {
  //     titulo: titulo,
  //     descripcion: descripcion,
  //     precio: precio,
  //     url: url,
  //     file: file,
  //   }).then((response) => {
  //     alert(response)
  //   }).catch((error)=>{
  //     console.log(error.message)
  //   });
  // };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className=" shadow-lg shadow-[#c1c3e0] p-10 rounded-lg"
        encType="multipart/form-data"
      >
        <h1 className=" text-[#354a5f] text-center mb-7 text-3xl font-bold">
          Publicar libro
        </h1>
        <div className="w-[350px]">
          <div className="inputDiv">
            <input
              className="inputBox"
              type="text"
              required
              onChange={(event) => {
                setTitulo(event.target.value);
              }}
            />
            <label className="absolute">Título</label>
          </div>
          <div className="inputDiv">
            <textarea
              className="inputBox resize-none"
              name=""
              id=""
              cols="41"
              rows="5"
              required
              onChange={(event) => {
                setDescripcion(event.target.value);
              }}
            ></textarea>
            <label className="absolute">Descripción</label>
          </div>
          <div className="inputDiv">
            <input
              className="inputBox"
              type="number"
              required
              onChange={(event) => {
                setPrecio(event.target.value);
              }}
            />
            <label className="absolute">Precio</label>
          </div>
          {/* esta se descomenta después de averuguar como guardarla en la BD */}
          <div className="inputDiv">
            <input
              className="inputBox"
              type="text"
              required
              onChange={(event) => {
                setUrl(event.target.value);
              }}
            />
            <label className="absolute">Imagen</label>
          </div>
          <div className="inputDiv">
            <label className="cursor-pointer hover:bg-[#354a5f] hover:text-white text-center border-[2px] border-[#5d6d7e] p-3 rounded-md outline-none bg-[#bdc3c7] text-[#354a5f] tracking-[3px] uppercase">
              Pdf
              <input
                id=""
                className="hidden"
                type="file"
                name="file"
                onChange={(event) => {
                  setFile(event.target.files[0]);
                }}
              />
            </label>
          </div>
          <input
            className=" w-[350px] bg-[#354a5f] text-white items-center justify-center  border-[2px] border-[#5d6d7e] p-3 rounded-md outline-none hover:bg-[#bdc3c7] hover:text-[#354a5f] tracking-[3px] uppercase"
            type="submit"
            value="Publicar Libro"
            onClick={()=> upload()}
          />
        </div>
      </form>
    </div>
  );
};