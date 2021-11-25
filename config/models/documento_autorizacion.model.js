const mongoose = require('mongoose');

const SarSchema = new mongoose.Schema({
    establecimiento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'establecimiento',
        trim: true
    },
    documento_fiscal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'documento_fiscal',
        trim: true
    },
    pos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pos',
        trim: true
    },
    fecha_limite: {
        type: String,
        trim: true
    },
    cai: {
        type: String,
        trim: true
    },
    rango_inicial: {
        type: Number,
        trim: true
    },
    rango_final: {
      type: Number,
      trim: true
    },
    is_active: {
      type: Boolean,
      default: true
    }

}, {
    versionKey: false,
    timestamps: true
});

SarSchema.pre('save', function (next) {
    mongoose.model('sar').find().sort({$natural:-1}).limit(1).exec(function(err, sar){
        if(err) return next(err);
        if(sar.length > 0){
        mongoose.model('sar').findByIdAndUpdate(sar[0]._id, 
            {$set: {is_active: false}}, {new: true}, function(err, sar){
                if(err){
                    console.log(err);
                }
            });
        }
    });
    next();
});
                

module.exports = mongoose.model('sar', SarSchema)