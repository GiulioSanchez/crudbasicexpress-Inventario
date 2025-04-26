// Contiene la lógica de nuestra APP (verbos)
const conexion = require('../database/db');

// "save" = verbo = accion = (<form action = "save" ...></form>)
exports.save = (req, res) => {
  const nombre = req.body.nombre;
  const categoria = req.body.categoria;
  const proveedor = req.body.proveedor;
  const precio = req.body.precio;
  const stock = req.body.stock;

  conexion.query("INSERT INTO productos SET ?", {
    nombre: nombre,
    categoria: categoria,
    proveedor: proveedor,
    precio: precio,
    stock: stock
  },
  (error, results) => {
    if (error) {
      console.error("No se pudo registrar el producto", error);
    } else {
      res.redirect('/');
    }
  });
};

exports.update = (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const categoria = req.body.categoria;
  const proveedor = req.body.proveedor;
  const precio = req.body.precio;
  const stock = req.body.stock;

  // Si tienes 2 comodines o más, express interpreta que los mandarás entre corchetes
  conexion.query("UPDATE productos SET ? WHERE id = ?", 
    [{
      nombre: nombre,
      categoria: categoria,
      proveedor: proveedor,
      precio: precio,
      stock: stock
    },
    id
    ],
  (error, results) => {
    if (error) {
      console.error("No se pudo actualizar el producto", error);
    } else {
      res.redirect('/');
    }
  });
};