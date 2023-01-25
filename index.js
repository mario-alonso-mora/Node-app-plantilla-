const express = require('express');


require('dotenv').config();

const cors = require('cors')




//!Crear el servidor de express
const app = express();

//!Base de Datos

//!conexion base de datos

//! Cors
app.use(cors())



//!Directorio Publico

//app.use(express.static('public'));


//!Lectura y parseo del body
app.use(express.json() );
app.use(express.text() );



//!Rutas



//!Escuchar las peticiones
app.listen(process.env.PORT,()=>{
    console.log(`Servidor Corriendo en el puerto ${process.env.PORT}`);
});