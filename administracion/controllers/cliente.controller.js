'use strict'

var Cliente = require('../models/cliente.model');

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
  const result = await newCliente.save();
  res.json(result)
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

module.exports = {
    getCliente,
    getClientes,
    createEmpleado
}