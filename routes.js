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


const router = express.Router();

router
  .get('/clientes', PersonalController.getClientes)
  .post('/clientes', PersonalController.createCliente);

router
  .get('/empleados', PersonalController.getEmpleados)
  .post('/empleados/create', PersonalController.createEmpleado);

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

  router
  .get('/documentos_autorizados', DocumentoAutorizado.getDocumentosAutorizado)
  .get('/documentos_autorizados/:_id', DocumentoAutorizado.getDocumentoAutorizado)
  .post('/documentos_autorizados/create', DocumentoAutorizado.createDocumentoAutorizado);

router
  .get('/documentos_fiscal', DocumentoFiscal.getDocumentosFiscal)
  .get('/documentos_fiscal/:_id', DocumentoFiscal.getDocumentoFiscal)
  .post('/documentos_fiscal/create', DocumentoFiscal.createDocumentoFiscal);

router
  .get('/establecimientos', Establecimiento.getEstablecimientos)
  .get('/establecimientos/:_id', Establecimiento.getEstablecimiento)
  .post('/establecimientos/create', Establecimiento.createEstablecimiento);

router
  .get('/puntos_de_venta', POS.getPuntosDeVenta)
  .get('/puntos_de_venta/:_id', POS.getPuntoDeVenta)
  .post('/puntos_de_venta/create', POS.createPuntoDeVenta);

router
  .get('/facturas', Factura.getFacturas)
  .get('/facturas/:_id', Factura.getFactura)
  .post('/facturas/create', Factura.createFactura);

router
  .get('/metodos_pago', MetodoPago.getMetodosDePago)
  .get('/metodos_pago/:_id', MetodoPago.getMetodoDePago)
  .post('/metodos_pago/create', MetodoPago.createMetodoDePago);



module.exports = router;