var  express = require("express");

var Categoria = require('./controllers/categoria.controller');
var Unidades = require('./controllers/unidades.controller');
var Producto = require('./controllers/producto.controller');


const router = express.Router();

router
  .get('/categorias', Categoria.getCategorias)
  .get('/categorias/:_id', Categoria.getCategoria)
  .post('/categorias/create', Categoria.createCategoria);

router
  .get('/unidades', Unidades.getUndidades)
  .get('/unidades/:_id', Unidades.getUnidad)
  .post('/unidades/create', Unidades.createUnidades);

router
  .get('/productos', Producto.getProductos)
  .get('/productos/:_id', Producto.getProducto)
  .post('/productos/create', Producto.createProducto);

module.exports = router;