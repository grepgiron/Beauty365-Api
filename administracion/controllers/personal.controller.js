'use strict'

var Cliente = require('../models/cliente.model');
var Empleado = require('../models/empleado.model');

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
  newCliente.save(function(err, result) {
    if (err) return res.json(err.message);
    res.json(result)
  });
}

const updateCliente = async (req, res) => {
  if(req.params.body){
    return res.status(404).send({
      message: "User not found with id " + req.params.body
    });
  }
  const cliente = await Cliente.findByIdAndUpdate(req.params._id, 
    { 
      nombres: req.body.nombres,
      telefono: req.body.telefono,
      dni: req.body.dni,
      email: req.body.email
    }, {
    new: true
  });

  if (!cliente) {
    return res.status(404).send('That platform ID was not found');
  }
  res.send(cliente);
}

const getCliente = async (req, res ) => {
  Cliente.findById(req.params._id)
  .then(cliente => {
      if(!cliente) {
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
    habilidades: req.body.habilidades
  })
  newEmpleado.save(function(err, result) {
    if (err) return res.json(err.message);
    res.json(result)
  });
}

const updateEmpleado = async (req, res) => {
  if(req.params.body){
    return res.status(404).send({
      message: "User not found with id " + req.params.body
    });
  }
  const empleado = await Empleado.findByIdAndUpdate(req.params._id, 
    { 
      nombres: req.body.nombres,
      telefono: req.body.telefono,
      habilidades: req.body.habilidades
    }, {
    new: true
  });

  if (!empleado) {
    return res.status(404).send('That platform ID was not found');
  }
  res.send(empleado);
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
  updateCliente,
  createCliente,
  getClientes,
  getEmpleado,
  updateEmpleado,
  createEmpleado,
  getEmpleados
}