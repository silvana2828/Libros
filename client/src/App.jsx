import './App.css'
import { Header } from './componentes/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { VerLibro } from './componentes/VerLibro';
import { Publicaciones } from './componentes/Publicaciones';
import { Formu } from './componentes/Formu';
import { FormuSe } from './componentes/FormuSe';
import { Inicio } from './componentes/Inicio';
import { Publicar } from './administrador/Publicar';
import { MisLibros } from './componentes/MisLibros';
import { Ventas } from './administrador/ventas';
import { VerLibroPa } from './componentes/VerLibroPa';
function App() {

  return (
    <Router>
      <div className="">
        {/* <Header></Header> */}
        {/* <Ventas></Ventas> */}
        {/* <MisLibros></MisLibros> */}
        {/* <VerLibro></VerLibro> */}
        {/* <Publicaciones></Publicaciones> */}
        {/* <Publicar></Publicar> */}
        {/* <Inicio></Inicio> */}
        {/* <Formu></Formu> */}
        {/* <FormuSe></FormuSe> */}
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route path="/misLibros" element={<MisLibros />}></Route>
            <Route path="/publicar" element={<Publicar />}></Route>
            <Route path="/ventas" element={<Ventas />}></Route>
            <Route index path='/inicio' element={<Inicio />}></Route>
            <Route path="/publicaciones" element={<Publicaciones />}></Route>
            <Route path="/libro/:id" element={<VerLibro />}></Route>
            <Route path="/libroPa/:id" element={<VerLibroPa />}></Route>
            <Route path="/iniciar" element={<FormuSe />}></Route>
            <Route path="/Registrar" element={<Formu />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
