const mongoose = require('mongoose');

const SarSchema = new mongoose.Schema({
    establecimiento: {
        type: mongoose.SchemaType.ObjectId,
        ref: 'establecimiento',
        trim: true
    },
    documento_fiscal: {
        type: mongoose.SchemaType.ObjectId,
        ref: 'documento_fiscal',
        trim: true
    },
    pos: {
        type: mongoose.SchemaType.ObjectId,
        ref: 'pos',
        trim: true
    },
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