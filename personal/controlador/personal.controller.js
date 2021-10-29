'use strict'

var Cliente = require('../cliente.model');
var Empleado = require('../empleado.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const getClientes = async (req, res) => {
  const clientes =  await Cliente.find()
    res.json(clientes)
}

const createCliente = async (req, res) => {
  const newCliente = new Cliente({
    nombres: req.body.nombres,
    telefono: req.body.telefono,
    dni: req.body.dni,
    email: req.body.email
  })
  const result = await newTutor.save();
  res.json(result)
}

const getCliente = async (req, res ) => {
  Cliente.findById(req.params._id)
  .then(cliente => {
      if(!clinete) {
          return res.status(404).send({
              message: "User not found with id " + req.params._id
          });            
      }
      res.send(cliente);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving user with id " + req.params._id
      });
  });
}

// Metodos GET, POST, DELETE, PULL de modelo Empleado
const getEmpleados = async (req, res) => {
  const empleados =  await Empleado.find()
    res.json(empleados)
}

const createEmpleado = async (req, res) => {
  const newEmpleado = new Empleado({
    nombres: req.body.nombres,
    telefono: req.body.telefono,
    dni: req.body.habilidades
  })
  const result = await newEmpleado.save();
  res.json(result)
}

const getEmpleado = async (req, res ) => {
  Empleado.findById(req.params._id)
  .then(empleado => {
      if(!empleado) {
          return res.status(404).send({
              message: "User not found with id " + req.params._id
          });            
      }
      res.send(empleado);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving user with id " + req.params._id
      });
  });
}


module.exports = {
  getCliente,
  createCliente,
  getClientes,
  getEmpleado,
  createEmpleado,
  getEmpleados
}