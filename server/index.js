const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer")
const path = require("path");

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST, GET"],
    credentials: true,
  })
);
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"libros",
    password:"",
})

const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'public/images')
  },
  filename: (req, file, cb) =>{
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer ({
  storage: storage,
})

app.post("/create",upload.single('file'), (req, res)=>{
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const url = req.body.url;
    const image = req.file.filename;
    db.query('INSERT INTO publicaciones (titulo,descripcion,precio,url,pdf) VALUES (?,?,?,?,?)',[titulo,descripcion,precio,url,image],
    (err, result)=>{
      if (err) {
      console.log(err);
      } else {
       res.send("Libro publicado con éxito");
      }
    }
);
})

app.get("/publicaciones", (req, res) => {
  db.query('SELECT * FROM publicaciones',
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/libros/:id", (req, res)=>{
    const id=req.params.id;
    db.query('SELECT * FROM publicaciones  WHERE id=?',[id],
    (err,result) =>{
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {
          res.send(result[0]); // Enviar el primer libro encontrado
        } else {
          res.status(404).send("Libro no encontrado");
        }
      }
    }
);
});

app.post("/register", (req, res)=>{
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;

    db.query('INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?,?,?)',[nombre, correo, contrasena],
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Usuario registrado con éxito");
        }
    }
);
})

app.post("/buscar",(req, res)=>{
  const nombre = req.body.nombre;
  db.query(
    "SELECT * FROM publicaciones WHERE titulo LIKE CONCAT('%', ?, '%')",[nombre],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {
          res.send("libro encontrado");
        } else {
          res.status(404).send("Libro no encontrado");
        }
      }
    }
  );
})

app.post("/inicioSesion", (req, res) => {
  const correo = req.body.correo;
  const contrasena = req.body.contrasena;
  const rol = req.body.rol;
  if (rol === "Administrador") {
    db.query(
      "SELECT * FROM administrador WHERE correo = ?  AND contrasena = ?",
      [correo, contrasena],
      (err, results) => {
        if (results.length == 0 || !contrasena) {
          res.json({ Message: "Usuario no existe" });
        } else {
          res.json({ Status: "SuccessAdmin"});
        }
      }
    );
  } else {
    if (correo && contrasena) {
      db.query(
        "SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?",
        [correo, contrasena],
        (err, results) => {
          if (results.length == 0 || !contrasena) {
            res.json({ Message: "Usuario no existe" });
          } else {
            res.json({ Status: "Success"});
          }
        }
      );
    }
  }
});

app.get("/administradores", (req,res) =>{
  db.query('SELECT*FROM administrador',
  (err, result)=>{
    if(err){
      console.log(err)
    }else{
    res.json({ Status: "SuccessAdmin" });
    }
  }
)
})

app.get("/usuarios", (req, res) => {
  db.query("SELECT*FROM usuarios", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ Status: "Success" });
    }
  });
});

app.listen(3000, ()=>{
    console.log("Corriendo en el puerto 3000")
})