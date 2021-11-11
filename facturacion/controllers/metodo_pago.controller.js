'use strict'

var MetodoPagado = require('../models/metodo_pago.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const getMetodosDePago = async (req, res) => {
  const metodosDePago =  await MetodoPagado.find()
    res.json(metodosDePago)
}

const createMetodoDePago = async (req, res) => {
  const newMetodo = new MetodoPagado({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  })
  const result = await newMetodo.save();
  res.json(result)
}

const getMetodoDePago = async (req, res ) => {
  MetodoPagado.findById(req.params._id)
  .then(metodoPago => {
      if(!metodoPago) {
          return res.status(404).send({
              message: "metodoPago not found with id " + req.params._id
          });            
      }
      res.send(metodoPago);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "metodoPago not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving metodoPago with id " + req.params._id
      });
  });
}

module.exports = {
    getMetodosDePago,
    getMetodoDePago,
    createMetodoDePago
}