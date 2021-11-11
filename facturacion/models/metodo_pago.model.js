const mongoose = require('mongoose');

const MetodoPagoSchema = new mongoose.Schema({
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