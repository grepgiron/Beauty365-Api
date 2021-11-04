const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: false,
        trim: true
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('categoria', categoriaSchema)