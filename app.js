// Express = Framework JS Backend (Node)
const express = require('express');
const app = express(); // Framework

// Definir un motor de plantillas
app.set('view engine', 'ejs');

// Configuración Middleware (COMUNICACIÓN ENTRE APLICACIONES)
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', require('./router'));

// Servidor local de pruebas
app.listen(3000, () => {
  console.log("Servidor ejecutado en http://localhost:3000");
});