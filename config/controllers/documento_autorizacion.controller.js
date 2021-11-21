'use strict'

var DocumentoAutorizado = require('../models/documento_autorizacion.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const index = async (req, res) => {
  const documentoAutorizado =  await DocumentoAutorizado.find()
    res.json(documentoAutorizado)
}

const create = async (req, res) => {
  const newDocumentoAutorizado = new DocumentoAutorizado({
    establecimiento: req.body.establecimiento,
    documento_fiscal: req.body.documento_fiscal,
    pos: req.body.pos,
    fecha_limite: req.body.fecha_limite,
    cai: req.body.cai,
    rango_inicial: req.body.rango_inicial,
    rango_final: req.body.rango_final,
    is_active: req.body.is_active
  })
  const result = await newDocumentoAutorizado.save();
  res.json(result)
}

const update = async (req, res) => {
  if(req.params.body){
    return res.status(404).send({
      message: "User not found with id " + req.params.body
    });
  }
  const documentoAutorizado = await DocumentoAutorizado.findByIdAndUpdate(req.params._id, 
    { 
      establecimiento: req.body.establecimiento,
      documento_fiscal: req.body.documento_fiscal,
      pos: req.body.pos,
      fecha_limite: req.body.fecha_limite,
      cai: req.body.cai,
      rango_inicial: req.body.rango_inicial,
      rango_final: req.body.rango_final,
      is_active: req.body.is_active
    }, {
    new: true
  });

  if (!documentoAutorizado) {
    return res.status(404).send('That platform ID was not found');
  }
  res.send(documentoAutorizado);
}

const get = async (req, res ) => {
  DocumentoAutorizado.findById(req.params._id)
  .populate({ path: 'establecimiento', select: 'nombre prefijo' })
  .populate({ path: 'pos', select: 'nombre prefijo' })
  .populate({ path: 'documento_fiscal', select: 'nombre prefijo' })
  .then(documentoAutorizado => {
      if(!documentoAutorizado) {
          return res.status(404).send({
              message: "documentoAutorizado not found with id " + req.params._id
          });            
      }
      res.send(documentoAutorizado);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "documentoAutorizado not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving documentoAutorizado with id " + req.params._id
      });
  });
}

const getSimple = async (req, res ) => {
  DocumentoAutorizado.findById(req.params._id)
  .then(documentoAutorizado => {
      if(!documentoAutorizado) {
          return res.status(404).send({
              message: "documentoAutorizado not found with id " + req.params._id
          });            
      }
      res.send(documentoAutorizado);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "documentoAutorizado not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving documentoAutorizado with id " + req.params._id
      });
  });
}

module.exports = {
  get,
  index,
  update,
  create,
  getSimple
  
}