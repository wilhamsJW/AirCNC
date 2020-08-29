const express = require('express');

const routes = express.Router(); //pegando o roteador do express e colocando ele dentro de uma variável routes
//agora tenho todos os métodos em routes

routes.use(express.json());  //preciso fazer isso pq o express não lê em JSON, então preciso falar pra ele
                           //lê em JSON, é como que isso fosse plugin, algo pra ajudar o express a entender o JSON

routes.post('/users', (req, res) => {
    return res.json( req.body );
});

//exportando as rotas
module.exports = routes;


