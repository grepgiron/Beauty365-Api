const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    },
    unidad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unidades',
        required: true
    },
    precio: {
        type: Number,
        required: false
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria',
        required: true
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('producto', productoSchema)