'use strict'

var PuntoDeVenta = require('../models/pos.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const index = async (req, res) => {
  const puntosDeVenta =  await PuntoDeVenta.find()
    res.json(puntosDeVenta)
}

const create = async (req, res) => {
  const newPuntoDeVenta = new PuntoDeVenta({
    nombre: req.body.nombre,
    prefijo: req.body.prefijo
  })
  const result = await newPuntoDeVenta.save();
  res.json(result)
}

const update = async (req, res) => {
    if(req.params.body){
        return res.status(404).send({
            message: "User not found with id " + req.params.body
        });
        }
    const puntoDeVenta = await PuntoDeVenta.findByIdAndUpdate(req.params._id, 
        req.body, { new: true });

    if (!puntoDeVenta) {
        return res.status(404).send('That platform ID was not found');
    }
    res.send(puntoDeVenta);
}

const get = async (req, res ) => {
  PuntoDeVenta.findById(req.params._id)
  .then(puntoDeVenta => {
      if(!puntoDeVenta) {
          return res.status(404).send({
              message: "puntoDeVenta not found with id " + req.params._id
          });            
      }
      res.send(puntoDeVenta);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "puntoDeVenta not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving puntoDeVenta with id " + req.params._id
      });
  });
}

module.exports = {
    get,
    create,
    index,
    update
}