var DetalleCita = require('./../models/detalle_cita.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const update = async (req, res) => {
    DetalleCita.findByIdAndUpdate(req.params._id, req.body, {new: true})
        .then(cita => {
            if(!cita) {
                return res.status(404).send({
                    message: "Cita not found with id " + req.params._id
                });
            }
            res.send(cita);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Cita not found with id " + req.params._id
                });                
            }
            return res.status(500).send({
                message: "Error updating cita with id " + req.params._id
        });
    });
}

const get = async (req, res ) => {
    DetalleCita.find({ cita: req.params._id})
  .then(cita => {
      if(!cita) {
          return res.status(404).send({
              message: "Cita not found with id " + req.params._id
          });            
      }
      res.send(cita);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Cita not found with id " + req.params._id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving cita with id " + req.params._id
      });
  });
}

module.exports = {
    get,
    update
}
