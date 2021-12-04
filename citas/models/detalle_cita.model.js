const mongoose = require('mongoose');

const DetalleCitaSchema = new mongoose.Schema({
  cita: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cita',
    required: true
  },
  activa: {
    type: Number,
    default: true,
    required: true
  },
  empleado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'empleado'
  },
  hora_entrada: {
    type: String
  },
  hora_salida: {
    type: String
  },
  servicio: {
    type: String
  },
  comentario_cliente: { 
    type: String
  },
  completado: { 
    type: Boolean,
    default: false
  },
  comentario_admin: { 
    type: String
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('detalle_cita', DetalleCitaSchema)