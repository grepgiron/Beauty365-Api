const mongoose = require('mongoose');

const ComercioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        match: [/([A-z])\w+/, "Nombre inválido"]
    },
    rtn: {
        type: Number,
        trim: true,
        unique:true,
        match: [/^([\d]{14})?$/, "RTN inválido"]
    },
    telefono: {
        type: Number,
        trim: true,
        match: [/^([\d]{8})?$/, "Teléfono inválido"]
    },
    email: {
      type: String,
      trim: true,
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,3})?$/, "Correo inválido"]
    },
    direccion: {
      type: String
  }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('comercio', ComercioSchema)