const mongoose = require('mongoose');

const CitaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
  dni: {
    type: Number
  },
  email: {
    type: String
  },
  fecha: {
    type: Date,
    required: true
  },
  hora: {
    type: String,
  },
  comentario: {
    type: String
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('cita', CitaSchema)
