const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer")
// const upload = multer({dest: 'uploads/'})
const path = require("path")
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"libro",
    password:"",
})

const storage = multer.diskStorage({
  destination:path.join(__dirname, 'uploads'),
  filename: (req, file, cb) =>{
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload= multer({storage: storage});


// app.post('/images/single', upload.single('imagenPerfil'), (req, res)=>{
//   saveImage(req.file)
//   res.send('fin')
// });
// app.post('/images/multi', upload.array('photos',10), (req,res)=>{
//   req.files.map(saveImage);
//   res.send("Termina Multi");
// });

// function saveImage(file){
//     const newPath = `./uploads/${file.originalname}`;
//     fs.renameSync(file.path, newPath);
//     return newPath;
// }

app.post("/create",upload.array("pdfs", 10), (req, res)=>{
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const url = req.body.url;
    const pdfFiles = req.files.map((file) => file.filename);
    db.query('INSERT INTO publicaciones (titulo,descripcion,precio,url,pdf) VALUES (?,?,?,?,?)',[titulo,descripcion,precio,url,pdfFiles.join(",")],
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
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

app.get("/buscar"),(req, res)=>{
  
}

// app.post('/inicio1', (req, res)=>{
//   const correo = req.body.correo;
//   const contrasena = req.body.contrasena;
//   // let passwordHaash = bcryptjs.hash(contrasena, 8);
//   // if(correo && contrasena){
//         db.query(
//           "SELECT contrasena FROM usuarios WHERE correo = ?",[correo],
//           (err, result) => {
//             if(result.length == 0 || !(contrasena)){
//               alert('usuario incorrect')
//             }else{
//               // estado = true;
//               alert("usuario correcto")
//               res.send("Hola mundo!!")
//             }
//           }
//         );
// })

app.listen(3000, ()=>{
    console.log("Corriendo en el puerto 3000")
})