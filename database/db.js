const mysql = require('mysql');
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Cambia esto a tu usuario de MySQL
  password: '',  // Cambia esto a tu contraseña de MySQL
  database: 'inventario'
});

// Cuando no hay errores, error = NULL
conexion.connect((error) => {
  if(error){
    console.error("Error en la conexión", error);
    return;
  }
  // Conexión exitosa
  console.log("Conectado correctamente a la base de datos MySQL")
});

// Exportar conexion
module.exports = conexion;