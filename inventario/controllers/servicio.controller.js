'use strict'

var Servicio = require('../models/servicio.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const index = async (req, res) => {
  const servicios =  await Servicio.find()
    res.json(servicios)
}

const create = async (req, res) => {
  const newServicio = new Servicio({
    code: req.body.code,
    nombre: req.body.nombre,
    descripcion : req.body.descripcion,
    detalle : req.body.detalle,
    precio : req.body.precio,
    categoria : req.body.categoria
  })
  const result = await newServicio.save();
  res.json(result)
}

const update = async (req, res) => {
    if(req.params.body){
      return res.status(404).send({
        message: "Service not found with id " + req.params.body
      });
    }
    const servicio = await Servicio.findByIdAndUpdate(req.params._id, 
      { 
        code: req.body.code,
        nombre: req.body.nombre,
        descripcion : req.body.descripcion,
        detalle : req.body.detalle,
        precio : req.body.precio,
        categoria : req.body.categoria
      }, {
      new: true
    });
  
    if (!servicio) {
      return res.status(404).send('That platform ID was not found');
    }
    res.send(servicio);
  }

const get = async (req, res ) => {
  Servicio.findById(req.params._id)
  .then(servicio => {
      if(!servicio) {
          return res.status(404).send({
              message: "servicio not found with id " + req.params._id
          });            
      }
      res.send(servicio);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "servicio not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving servicio with id " + req.params._id
      });
  });
}

module.exports = {
    get,
    update,
    index,
    create
}