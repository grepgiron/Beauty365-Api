'use strict'

var Categoria = require('../models/categoria.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const index = async (req, res) => {
  const categorias =  await Categoria.find()
    res.json(categorias)
}

const create = async (req, res) => {
  const newCategoria = new Categoria({
    code: req.body.code,
    nombre: req.body.nombre,
    descripcion : req.body.descripcion
  })
  const result = await newCategoria.save();
  res.json(result)
}

const update = async (req, res) => {
    if(req.params.body){
      return res.status(404).send({
        message: "User not found with id " + req.params.body
      });
    }
    const categoria = await Categoria.findByIdAndUpdate(req.params._id, 
      { 
        code: req.body.code,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
      }, {
      new: true
    });
  
    if (!categoria) {
      return res.status(404).send('That platform ID was not found');
    }
    res.send(categoria);
  }

const get = async (req, res ) => {
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
    get,
    update,
    index,
    create
}