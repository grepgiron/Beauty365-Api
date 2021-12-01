'use strict'

var Rango = require('../models/rango.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const get = async (req, res ) => {
  Rango.findById(req.params._id)
  .then(rango => {
      if(!rango) {
          return res.status(404).send({
              message: "rango not found with id " + req.params._id
          });            
      }
      res.send(rango);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "rango not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving rango with id " + req.params._id
      });
  });
}

const update = async (req, res ) => {
  Rango.findByIdAndUpdate(req.params._id, req.body, {new: true})
  .then(rango => {
      if(!rango) {
          return res.status(404).send({
              message: "rango not found with id " + req.params._id
          });
      }
      res.send(rango);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "rango not found with id " + req.params._id
          });
      }
      return res.status(500).send({
          message: "Error updating rango with id " + req.params._id
      });
  });
}

module.exports = {
  get,
  update
}