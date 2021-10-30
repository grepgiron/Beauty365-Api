const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
    code: {
      type: String,
      required: true,
      trim: true
    },
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: false
    },
    precio: {
      type: Number,
      required: false
    },
    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categoria',
      required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('servicio', servicioSchema)