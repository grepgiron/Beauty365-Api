const mongoose = require('mongoose');

const Rango = new mongoose.Schema({
  documento_autorizado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sar',
        required: true
    },
    inicio: {
      type: Number,
      required: true
    },
    final: {
      type: Number,
      required: true
    },
    actual: {
        type: Number,
        default: 0,
        required: true
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('rango', Rango)