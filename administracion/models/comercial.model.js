const mongoose = require('mongoose');

const ComercioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    rtn: {
        type: Number,
        trim: true
    },
    telefono: {
        type: Number,
        trim: true
    },
    email: {
      type: String,
      trim: true
    },
    direccion: {
      type: String
  }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('comercio', ComercioSchema)