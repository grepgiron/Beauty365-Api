const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
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