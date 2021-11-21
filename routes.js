var  express = require("express");

var PersonalController = require('./administracion/controllers/personal.controller');

var Categoria = require('./inventario/controllers/categoria.controller');
var Unidades = require('./inventario/controllers/unidades.controller');
var Producto = require('./inventario/controllers/producto.controller');

var DocumentoAutorizado = require('./config/controllers/documento_autorizacion.controller');
var DocumentoFiscal = require('./config/controllers/documento_fiscal.controller');
var Establecimiento = require('./config/controllers/establecimiento.controller');
var POS = require('./config/controllers/punto_de_venta.controller');

var Factura = require('./facturacion/controllers/factura.controller');
var MetodoPago = require('./facturacion/controllers/metodo_pago.controller');

var Sar = require('./config/controllers/sar.controller');
var Service = require('./inventario/controllers/servicio.controller');


const router = express.Router();

router
  .get('/clientes', PersonalController.getClientes)
  .get('/clientes/:_id', PersonalController.getCliente)
  .put('/clientes/:_id', PersonalController.updateCliente)
  .post('/clientes', PersonalController.createCliente);

router
  .get('/empleados', PersonalController.getEmpleados)
  .get('/empleados/:_id', PersonalController.getEmpleado)
  .put('/empleados/:_id', PersonalController.updateEmpleado)
  .delete('/empleados/:_id', PersonalController.deleteEmpleado)
  .post('/empleados/create', PersonalController.createEmpleado);

  router
  .get('/categorias', Categoria.index)
  .get('/categorias/:_id', Categoria.get)
  .put('/categorias/:_id', Categoria.update)
  .post('/categorias/create', Categoria.create);

router
  .get('/unidades', Unidades.getUndidades)
  .get('/unidades/:_id', Unidades.getUnidad)
  .post('/unidades/create', Unidades.createUnidades);

router
  .get('/servicios', Service.index)
  .get('/servicios/:_id', Service.get)
  .post('/servicios/create', Service.create)
  .put('/servicios/:_id', Service.update);

router
  .get('/productos', Producto.getProductos)
  .get('/productos/:_id', Producto.getProducto)
  .post('/productos/create', Producto.createProducto);

  router
  .get('/documentos_autorizados', DocumentoAutorizado.index)
  .get('/documentos_autorizados/:_id', DocumentoAutorizado.get)
  .get('/documento_autorizado/:id', DocumentoAutorizado.getSimple)
  .put('/documentos_autorizados/:_id', DocumentoAutorizado.update)
  .post('/documentos_autorizados/create', DocumentoAutorizado.create);

router
  .get('/documentos_fiscal', DocumentoFiscal.index)
  .get('/documentos_fiscal/:_id', DocumentoFiscal.get)
  .post('/documentos_fiscal/create', DocumentoFiscal.create);

router
  .get('/establecimientos', Establecimiento.index)
  .get('/establecimientos/:_id', Establecimiento.get)
  .post('/establecimientos/create', Establecimiento.create);

router
  .get('/puntos_de_venta', POS.index)
  .get('/puntos_de_venta/:_id', POS.get)
  .post('/puntos_de_venta/create', POS.create);

router
  .get('/facturas', Factura.getFacturas)
  .get('/facturas/:_id', Factura.getFactura)
  .post('/facturas/create', Factura.createFactura);

router
  .get('/metodos_pago', MetodoPago.getMetodosDePago)
  .get('/metodos_pago/:_id', MetodoPago.getMetodoDePago)
  .post('/metodos_pago/create', MetodoPago.createMetodoDePago);



module.exports = router;