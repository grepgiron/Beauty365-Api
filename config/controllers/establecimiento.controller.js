'use strict'

var Establecimiento = require('../models/establecimiento.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const getEstablecimientos = async (req, res) => {
  const establecimiento =  await Establecimiento.find()
    res.json(establecimiento)
}

const createEstablecimiento = async (req, res) => {
  const newEstablecimiento = new Establecimiento({
    code: req.body.nombre,
    nombre: req.body.prefijo
  })
  const result = await newEstablecimiento.save();
  res.json(result)
}

const getEstablecimiento = async (req, res ) => {
  Establecimiento.findById(req.params._id)
  .then(establecimiento => {
      if(!establecimiento) {
          return res.status(404).send({
              message: "establecimiento not found with id " + req.params._id
          });            
      }
      res.send(establecimiento);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "establecimiento not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving establecimiento with id " + req.params._id
      });
  });
}

module.exports = {
  getEstablecimiento,
  getEstablecimientos,
  createEstablecimiento
}