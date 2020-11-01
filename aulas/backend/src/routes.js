const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router(); //pegando o roteador do express e colocando ele dentro de uma variável routes
//agora tenho todos os métodos em routes

const upload = multer(uploadConfig); //preciso passar o uploadConfig como parãmetro do multer

routes.use(express.json()); //preciso fazer isso pq o express não lê em JSON, então preciso falar pra ele
                           //lê em JSON, é como que isso fosse plugin, algo pra ajudar o express a entender o JSON

routes.post('/sessions', SessionController.store); //.store pq foi o método criado na Session...
routes.post('/spots', upload.single('thumbnail'), SpotController.store);  //upload.single('thumbnail') => passando o parametro da imagem
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spot/:spot_id/bookings', BookingController.store);

//exportando as rotas
module.exports = routes;


