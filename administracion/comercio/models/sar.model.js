const mongoose = require('mongoose');

const SarSchema = new mongoose.Schema({
    fecha_limite: {
        type: String,
        trim: true
    },
    cai: {
        type: String,
        trim: true
    },
    rango_inicial: {
        type: Number,
        trim: true
    },
    rango_final: {
      type: Number,
      trim: true
  }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('sar', SarSchema)