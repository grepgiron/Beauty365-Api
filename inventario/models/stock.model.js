const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  producto: {
    type: mongoose.Types.ObjectId,
    ref: 'producto',
    required: true
  },
  cantidad: {
    type: Number,
    default: 0
  }
}, {
  versionKey: false,
  timestamps: true
});
  
module.exports = mongoose.model('stock', StockSchema)