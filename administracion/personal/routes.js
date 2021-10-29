var  express = require("express");

var PersonalController = require('./controllers/personal.controller');


const router = express.Router();

router
  .get('/personal/clientes', PersonalController.getClientes)
  .post('/personal/clientes', PersonalController.createCliente);

router
  .get('/personal/empleados', PersonalController.getEmpleados)
  .post('/personal/empleados', PersonalController.createEmpleado);


module.exports = router;