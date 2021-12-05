'use strict'

var Establecimiento = require('../models/establecimiento.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const index = async (req, res) => {
  const establecimiento =  await Establecimiento.find()
    res.json(establecimiento)
}

const create = async (req, res) => {
  const newEstablecimiento = new Establecimiento({
    nombre: req.body.nombre,
    prefijo: req.body.prefijo
  })
  const result = await newEstablecimiento.save();
  res.json(result)
}

const update = async (req, res) => {
  if(req.params.body){
    return res.status(404).send({
      message: "User not found with id " + req.params.body
    });
  }
  const establecimiento = await Establecimiento.findByIdAndUpdate(req.params._id, 
    req.body, { new: true });

  if (!establecimiento) {
    return res.status(404).send('That platform ID was not found');
  }
  res.send(establecimiento);
}

const get = async (req, res ) => {
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
  get,
  create,
  index,
  update
}