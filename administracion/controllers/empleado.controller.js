'use strict'

var Empleado = require('../models/empleado.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const getEmpleados = async (req, res) => {
  const empleados =  await Empleado.find()
    res.json(empleados)
}

const createEmpleado = async (req, res) => {
  const newEmpleado = new Empleado({
    nombres: req.body.nombres,
    telefono: req.body.telefono,
    habilidades : req.body.habilidades
  })
  const result = await newEmpleado.save();
  res.json(result)
}

const getEmpleado = async (req, res ) => {
    Empleado.findById(req.params._id)
  .then(empleado => {
      if(!empleado) {
          return res.status(404).send({
              message: "Empleado not found with id " + req.params._id
          });            
      }
      res.send(empleado);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Empleado not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving Empleado with id " + req.params._id
      });
  });
}

module.exports = {
    getEmpleado,
    getEmpleados,
    createEmpleado
}