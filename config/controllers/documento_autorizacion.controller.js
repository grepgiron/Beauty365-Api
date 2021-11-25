'use strict'

var DocumentoAutorizado = require('../models/documento_autorizacion.model');
var Rango = require('../models/rango.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const index = async (req, res) => {
  const documentoAutorizado =  await DocumentoAutorizado.find().sort({ fecha_limite: -1 })
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
  newDocumentoAutorizado.save(function(err, result) {
    if (err){ 
      return res.json(err.message)
    }else{
      Rango.find().sort({ fecha_limite: -1 }).limit(1).then(rango => {
        if(rango.length > 0){
          if(rango[0].rango_final >= newDocumentoAutorizado.rango_final){
            return res.json('El rango final del documento autorizado no puede ser mayor al rango final del rango ' + rango[0].rango_final)
          }else{
            Rango.findByIdAndUpdate(rango[0]._id,
              { $set: {
                documento_autorizado: newDocumentoAutorizado._id, 
                final: newDocumentoAutorizado.rango_final,
                inicio: newDocumentoAutorizado.rango_inicial,
                actual: 0
               }},
               { new: true }, function (err, rango) {
              if (err) return res.json(err.message)
              return res.json(result)
            })
          }
        }else{
          const rango = new Rango({
            documento_autorizado: result._id,
            inicio: result.rango_inicial,
            final: result.rango_final
          })
          rango.save();
          return res.json(result)
        }
      })
    }
  });
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