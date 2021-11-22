'use strict'

var Producto = require('../models/producto.model');
var Stock = require('../models/stock.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const getProductos = async (req, res) => {
  const productos =  await Producto.find()
    res.json(productos)
}

const createProducto = async (req, res) => {
  const newProducto = new Producto({
    code: req.body.code,
    nombre: req.body.nombre,
    descripcion : req.body.descripcion,
    unidad : req.body.unidad,
    costo : req.body.costo,
    precio : req.body.precio,
    categoria : req.body.categoria
  })
  const result = await newProducto.save();
  if(result){
    createStock(result._id);
  }
  res.json(result)
}

const getProducto = async (req, res ) => {
    Producto.findById(req.params._id)
    .populate({ path: 'unidad', select: 'nombre' })
    .populate({ path: 'categoria', select: 'nombre' })
  .then(producto => {
      if(!producto) {
          return res.status(404).send({
              message: "Producto not found with id " + req.params._id
          });            
      }
      res.send(producto);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Producto not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving producto with id " + req.params._id
      });
  });
}

const update = async (req, res) => {
  if(req.params.body){
    return res.status(404).send({
      message: "product not found with id " + req.params.body
    });
  }
  const producto = await Producto.findByIdAndUpdate(req.params._id, 
    { 
      code: req.body.code,
      nombre: req.body.nombre,
      descripcion : req.body.descripcion,
      unidad : req.body.unidad,
      costo : req.body.costo,
      precio : req.body.precio,
      categoria : req.body.categoria
    }, {
    new: true
  });

  if (!producto) {
    return res.status(404).send('That platform ID was not found');
  }
  res.send(producto);
}

function createStock(req) {
  const newStock = new Stock({
    producto: req
  })
  const stock = newStock.save();
  console.log(JSON.stringify(stock));
}

module.exports = {
    getProducto,
    getProductos,
    createProducto,
    update
}