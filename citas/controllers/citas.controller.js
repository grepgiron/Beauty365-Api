'use strict'

var Cita = require('../models/cita.model');
var DetalleCita = require('../models/detalle_cita.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const getCitas = async (req, res) => {
  const citas =  await Cita.find()
    res.json(citas)
}

const getCitasToday = async (req, res) => {
    console.log(new Date());
    const citas =  await Cita.find({
        fecha: {$gte: new Date()},
        fecha: {$lte: new Date()}
    }).sort({fecha: 1} )
    res.json(citas)
}


const createCita = async (req, res) => {
  const newCita = new Cita({
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    email: req.body.email,
    dni : req.body.dni,
    fecha : req.body.fecha,
    hora : req.body.hora,
    comentario : req.body.comentario,
  })
  const result = await newCita.save().then(result => {
      const { _id } = result;
      const detalle = new DetalleCita({
        cita: _id
      })
        detalle.save();
        res.json({
            message: 'Cita creada correctamente',
            result
        })
    })
}

const updateCita = async (req, res) => {
    const { id } = req.params;
    const cita = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        dni : req.body.dni,
        fecha : req.body.fecha,
        hora : req.body.hora,
        comentario : req.body.comentario,
    }
    const result = await Cita.findByIdAndUpdate(id, cita, {new: true});
    res.json(result)
}


const getCita = async (req, res ) => {
    Cita.findById(req.params._id)
  .then(cita => {
      if(!cita) {
          return res.status(404).send({
              message: "Cita not found with id " + req.params._id
          });            
      }
      res.send(cita);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Cita not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving cita with id " + req.params._id
      });
  });
}

module.exports = {
    getCita,
    getCitas,
    createCita,
    updateCita,
    getCitasToday
}