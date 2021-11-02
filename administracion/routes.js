var  express = require("express");

var PersonalController = require('./controllers/personal.controller');


const router = express.Router();

router
  .get('/clientes', PersonalController.getClientes)
  .post('/clientes', PersonalController.createCliente);

router
  .get('/empleados', PersonalController.getEmpleados)
  .post('/empleados/create', PersonalController.createEmpleado);


module.exports = router;