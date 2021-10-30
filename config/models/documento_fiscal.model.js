const mongoose = require('mongoose');

const documentoFiscalSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    prefijo: {
        type: String,
        trim: true
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('documento_fiscal', documentoFiscalSchema)