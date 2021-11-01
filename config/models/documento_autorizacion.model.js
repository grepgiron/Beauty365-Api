const mongoose = require('mongoose');

const SarSchema = new mongoose.Schema({
    establecimiento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'establecimiento',
        trim: true
    },
    documento_fiscal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'documento_fiscal',
        trim: true
    },
    pos: {
        type: mongoose.Schema.Types.ObjectId,
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
    },
    is_active: {
      type: Boolean
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('sar', SarSchema)