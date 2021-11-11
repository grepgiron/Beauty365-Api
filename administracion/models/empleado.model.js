const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true,
        trim: true,
        match: [/([A-z])\w+/, "Nombre inválido"]
        
    },
    telefono: {
        type: Number,
        required: true,
        trim: true,
        match: [/^([\d]{8})?$/, "Teléfonoo inválido"]
    },
    habilidades: {
        type: String,
        required: true,
        trim: true
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('empleado', UserSchema)