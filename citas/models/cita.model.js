const mongoose = require('mongoose');

const CitaSchema = new mongoose.Schema({
  cliente: {
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
  fecha: {
    type: Date,
    required: true
  },
  hora: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('cita', CitaSchema)