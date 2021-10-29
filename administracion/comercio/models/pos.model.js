const mongoose = require('mongoose');

const PosSchema = new mongoose.Schema({
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

module.exports = mongoose.model('pos', PosSchema)