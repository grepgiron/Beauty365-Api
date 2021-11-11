const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true,
        trim: true,
        match: [/([A-z])\w+/, "Nombre inválido"]
        
    },
    telefono: {
        type: Number,
        required: false,
        trim: true,
        match: [/^([\d]{8})?$/, "Teléfono inválido"]
    },
    dni: {
        type: Number,
        trim: true,
        unique: true,
        match: [/^([\d]{13,14})?$/, "DNI inválido"]
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,3})?$/, "Correo inválido"]
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('cliente', ClienteSchema)