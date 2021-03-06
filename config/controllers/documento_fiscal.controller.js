'use strict'

var DocumentoFiscal = require('../models/documento_fiscal.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const index = async (req, res) => {
  const documentoFiscal =  await DocumentoFiscal.find()
    res.json(documentoFiscal)
}

const create = async (req, res) => {
  const newDocumentoFiscal = new DocumentoFiscal({
    nombre: req.body.nombre,
    prefijo: req.body.prefijo
  })
  const result = await newDocumentoFiscal.save();
  res.json(result)
}

const update = async (req, res) => {
  if(req.params.body){
    return res.status(404).send({
      message: "User not found with id " + req.params.body
    });
  }
  const document = await DocumentoFiscal.findByIdAndUpdate(req.params._id, 
    req.body, { new: true });

  if (!document) {
    return res.status(404).send('That platform ID was not found');
  }
  res.send(document);
}

const get = async (req, res ) => {
  DocumentoFiscal.findById(req.params._id)
  .then(documentoFiscal => {
      if(!documentoFiscal) {
          return res.status(404).send({
              message: "documentoFiscal not found with id " + req.params._id
          });            
      }
      res.send(documentoFiscal);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "documentoFiscal not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving documentoFiscal with id " + req.params._id
      });
  });
}

module.exports = {
  get,
  create,
  index,
  update
}