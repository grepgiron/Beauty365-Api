'use strict'

var Categoria = require('../models/categoria.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const getCategorias = async (req, res) => {
  const categorias =  await Categoria.find()
    res.json(categorias)
}

const createCategoria = async (req, res) => {
  const newCategoria = new Categoria({
    code: req.body.code,
    nombre: req.body.nombre,
    descripcion : req.body.descripcion
  })
  const result = await newCategoria.save();
  res.json(result)
}

const getCategoria = async (req, res ) => {
    Categoria.findById(req.params._id)
  .then(categoria => {
      if(!categoria) {
          return res.status(404).send({
              message: "Categoria not found with id " + req.params._id
          });            
      }
      res.send(categoria);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Categoria not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving categoria with id " + req.params._id
      });
  });
}

module.exports = {
    getCategoria,
    getCategorias,
    createCategoria
}