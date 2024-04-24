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
import { useState } from 'react';
function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);


  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/misLibros" element={<MisLibros allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>}></Route>
            <Route path="/publicar" element={<Publicar />}></Route>
            <Route path="/ventas" element={<Ventas allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>}></Route>
            <Route index path="/inicio" element={<Inicio />}></Route>
            <Route path="/publicaciones" element={<Publicaciones />}></Route>
            <Route path="/libro/:id" element={<VerLibro allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>}></Route>
            <Route path="/libroPa/:id" element={<VerLibroPa allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>}></Route>
            <Route path="/iniciar" element={<FormuSe />}></Route>
            <Route path="/Registrar" element={<Formu />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
