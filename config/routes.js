var  express = require("express");

var Categoria = require('./controllers/categoria.controller');
var DocumentoAutorizado = require('./controllers/documento_autorizacion.controller');
var DocumentoFiscal = require('./controllers/documento_fiscal.controller');
var Establecimiento = require('./controllers/establecimiento.controller');
var POS = require('./controllers/punto_de_venta.controller');
var Unidades = require('./controllers/unidades.controller');


const router = express.Router();

router
  .get('/categorias', Categoria.getCategorias)
  .post('/categorias/create', Categoria.createCategoria);

router
  .get('/documentos_autorizados', DocumentoAutorizado.getDocumentosAutorizado)
  .post('/documentos_autorizados/create', DocumentoAutorizado.createDocumentoAutorizado);

router
  .get('/documentos_fiscal', DocumentoFiscal.getDocumentosFiscal)
  .post('/documentos_fiscal/create', DocumentoFiscal.createDocumentoFiscal);

router
  .get('/establecimientos', Establecimiento.getEstablecimientos)
  .post('/establecimientos/create', Establecimiento.createEstablecimiento);

router
  .get('/puntos_de_venta', POS.getPuntosDeVenta)
  .post('/puntos_de_venta/create', POS.createPuntoDeVenta);

router
  .get('/unidades', Unidades.getUndidades)
  .post('/unidades/create', Unidades.createUnidades);

module.exports = router;