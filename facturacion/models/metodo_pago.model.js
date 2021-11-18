const mongoose = require('mongoose');

const MetodoPagoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  dias_pago: {
    type: String
  },
  credito: {
    type: Boolean
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('metodo_pago', MetodoPagoSchema)
