const mongoose = require('mongoose');

const MetodoPagoSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    trim: true
  }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('metodo_pago', MetodoPagoSchema)