var DetalleCita = require('./../models/detalle_cita.model');

// Metodos GET, POST, DELETE, PULL de modelo Cliente

const update = async (req, res) => {
    const { id } = req.params;
    const cita = {
        activa: req.body.activa,
        empleado: req.body.empleado,
        hora_entrada : req.body.hora_entrada,
        hora_salida : req.body.hora_salida,
        servicio : req.body.servicio,
        comentario : req.body.comentario,
        completado: req.body.completado
    }
    const result = await DetalleCita.findOneAndUpdate({ cita: id }, cita, {new: true});
    res.json(result)
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
