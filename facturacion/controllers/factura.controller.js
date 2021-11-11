'use strict'

var Factura = require('../models/factura.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const getFacturas = async (req, res) => {
  const facturas =  await Factura.find()
    res.json(facturas)
}

const createFactura = async (req, res) => {
  const newFactura = new Factura({
    num_factura: req.body.num_factura,
    fecha: req.body.fecha,
    doc_autorizacion: req.body.doc_autorizacion,
    cliente: req.body.cliente,
    productos: req.body.productos,
    sub_total: req.body.sub_total,
    impuesto: req.body.impuesto,
    total: req.body.sub_total,
    metodo_pago: req.body.impuesto,
    estado: req.body.impuesto
  })
  const result = await newFactura.save();
  res.json(result)
}

const getFactura = async (req, res ) => {
  Factura.findById(req.params._id)
  .then(factura => {
      if(!factura) {
          return res.status(404).send({
              message: "factura not found with id " + req.params._id
          });            
      }
      res.send(factura);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "factura not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving factura with id " + req.params._id
      });
  });
}

module.exports = {
    getFacturas,
    getFactura,
    createFactura
}