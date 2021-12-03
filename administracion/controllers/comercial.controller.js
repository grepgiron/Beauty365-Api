'use strict'

var Comercial = require('../models/comercial.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const createComercial = async (req, res) => {
  const newComercial = new Comercial({
    nombre: req.body.nombre,
    rtn: req.body.telefono,
    telefono : req.body.habilidades,
    email: req.body.email,
    direccion: req.body.direccion
  })
  const result = await newComercial.save();
  res.json(result)
}

const get = async (req, res) => {
    const result = await Comercial.find();
    res.json(result)
}

const update = async (req, res) => {
    const result = await Comercial.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
    res.json(result)
}

const getComercial = async (req, res ) => {
    Comercial.findById(req.params._id)
  .then(comercial => {
      if(!comercial) {
          return res.status(404).send({
              message: "Comercial not found with id " + req.params._id
          });            
      }
      res.send(empleado);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Comercial not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving Comercial with id " + req.params._id
      });
  });
}

module.exports = {
    getComercial,
    createComercial,
    get,
    update
}