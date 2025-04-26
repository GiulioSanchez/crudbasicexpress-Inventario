const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

// Importar controlador
const inventarioController = require('./controllers/inventario');

// Ruta para la página principal
router.get('/', (req, res) => {
  conexion.query('SELECT * FROM productos', (error, results) => {
    if (error) {
      console.error("Error al consultar la base de datos:", error);
      return res.status(500).send("Error en el servidor");
    }
    res.render('index', { productos: results });
  });
});

// Ruta para la página de creación
router.get('/create', (req, res) => {
  res.render('create');
});

// Ruta para guardar nuevo producto
router.post('/save', inventarioController.save);

// Ruta para editar producto
router.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  conexion.query('SELECT * FROM productos WHERE id = ?', [id], (error, results) => {
    if (error) {
      console.error("Error al consultar la base de datos:", error);
      return res.status(500).send("Error en el servidor");
    }
    res.render('edit', { producto: results[0] });
  });
});

// Ruta para actualizar producto
router.post('/update', inventarioController.update);

// Ruta para eliminar producto
router.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  conexion.query('DELETE FROM productos WHERE id = ?', [id], (error, results) => {
    if (error) {
      console.error("No se pudo eliminar el producto:", error);
    }
    res.redirect('/');
  });
});

module.exports = router;