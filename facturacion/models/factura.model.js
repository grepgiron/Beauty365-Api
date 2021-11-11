const mongoose = require('mongoose');

const FacturaSchema = new mongoose.Schema({
  num_factura: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    trim: true
  },
  doc_autorizacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sar',
    trim: true
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cliente',
    required: true
  },
  productos: [{
    producto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'producto',
      required: true
    },
    cantidad: {
      type: Number,
      required: true
    },
    precio: {
      type: Number,
      required: true
    },
    descuento: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  }],
  sub_total: {
    type: Number,
    required: true
  },
  impuesto: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  metodo_pago: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'metodo_pago',
    required: true
  },
  estado: {
    type: String,
    trim: true
  }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('factura', FacturaSchema)