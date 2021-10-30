'use strict'

//Cargar Modelos de inventario

var Categoria = require('../../config/models/categoria.model');
var Producto = require('../models/producto.model');
var Unidades = require('../../config/models/unidades.model');

//Crear Categoria
const createCategoria = async (req, res) => {
  const newCategoria = new Categoria({
    code: req.body.code,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  })
  const result = await newCaterogia.save();
  res.json(result)
}

//Crear Categoria
const createUnidades = async (req, res) => {
  const newUnidades = new Unidades({
    code: req.body.code,
    nombre: req.body.nombre
  })
  const result = await newUnidades.save();
  res.json(result)
}

//Crear Producto
const createProducto = async (req, res) => {
  const newProducto = new Producto({
    code: req.body.code,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    unidades: req.body.unidades,
    precio: req.body.precio,
    categoria: req.body.categoria
  })
  const result = await newProducto.save();
  res.json(result)
}


// Exportar funciones del controlador
module.exports = {
  createProducto,
  createUnidades,
  createCategoria
}