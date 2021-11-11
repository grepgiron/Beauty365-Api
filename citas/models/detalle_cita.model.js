const mongoose = require('mongoose');

const DetalleCitaSchema = new mongoose.Schema({
  cita: {
    type: monogoose.Schema.Types.ObjectId,
    ref: 'cita',
    required: true
  },
  activa: {
    type: Number,
    required: true
  },
  empleado: {
    type: monogoose.Schema.Types.ObjectId,
    ref: 'empleado',
    required: true
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
    type: Boolean
  },
  comentario_admin: { 
    type: String
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('detalle_cita', DetalleCitaSchema)