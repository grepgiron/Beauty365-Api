// Cargar express
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//Cargar rutas
var Routes = require('./routes');
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/v1', Routes);

// Cargar Mongo
const mongoose = require('mongoose');
// Objeto de cliente global que será la instancia del documento MongoDB
async function connectMongoose(){
  await mongoose.connect('mongodb+srv://beauty:KsgHecmhzDu76K7k@beautydb.bu8hu.mongodb.net/BeautyDB?retryWrites=true&w=majority').then(result => {
        console.info('MongoDb Connection Complete.' );       
    }).catch(err => {
        console.info(err)
    })
}
// Definiendo carga inicial del servicio
async function initialLoad() {
	await connectMongoose();
}
initialLoad()
//Puerto de conexion
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
  console.log("Up and running Beauty365Salon service");
});