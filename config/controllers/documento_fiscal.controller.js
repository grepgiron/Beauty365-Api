'use strict'

var DocumentoFiscal = require('../models/documento_fiscal.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const getDocumentosFiscal = async (req, res) => {
  const documentoFiscal =  await DocumentoFiscal.find()
    res.json(documentoFiscal)
}

const createDocumentoFiscal = async (req, res) => {
  const newDocumentoFiscal = new DocumentoFiscal({
    nombre: req.body.nombre,
    prefijo: req.body.prefijo
  })
  const result = await newDocumentoFiscal.save();
  res.json(result)
}

const getDocumentoFiscal = async (req, res ) => {
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
  getDocumentoFiscal,
  getDocumentosFiscal,
  createDocumentoFiscal
}