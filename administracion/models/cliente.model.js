const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: [true, 'El nombre es necesario'],
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
        trim: true,
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,3})?$/, "correo invalido"]
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('cliente', ClienteSchema)