const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: Number,
        required: false,
        trim: true
    },
    dni: {
        type: Number,
        trim: true
    },
    email: {
        type: String,
        trim: true
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('cliente', ClienteSchema)