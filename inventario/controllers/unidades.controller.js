'use strict'

var Unidades = require('../models/unidades.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const getUndidades = async (req, res) => {
  const unidades =  await Unidades.find()
    res.json(unidades)
}

const createUnidades = async (req, res) => {
  const newUnidad = new Unidades({
    code: req.body.code,
    nombre: req.body.nombre
  })
  const result = await newUnidad.save();
  res.json(result)
}

const getUnidad = async (req, res ) => {
    Unidades.findById(req.params._id)
  .then(unidad => {
      if(!unidad) {
          return res.status(404).send({
              message: "User not found with id " + req.params._id
          });            
      }
      res.send(unidad);
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
    getUnidad,
    getUndidades,
    createUnidades
}