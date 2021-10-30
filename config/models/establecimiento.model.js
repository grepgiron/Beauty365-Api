const mongoose = require('mongoose');

const EstablecimientoSchema = new mongoose.Schema({
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

module.exports = mongoose.model('establecimiento', EstablecimientoSchema)