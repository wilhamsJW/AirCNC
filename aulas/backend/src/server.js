const express = require('express');      //express é uma framework para Node.js, existem diversas funcionalidades prontas dentro dele, inclusive as rotas da aplicação
const mongoose = require('mongoose');   //mongoose = é uma lib ou ferramenta que irá ajudar a trabalhar com o mongodb; quando formos usar os métodos http iremos usar o mongoose
const routes = require('./routes');    //se coloca ./, se não o node entende q é uma dependecia, assim como express acima não tem ./ pq é uma dependeçia ou lib


const app = express(); //aqui o express está sendo usado pra facilitar nossas rotas, existem parenteses pq ele é uma funçao

/*
routes.post('users', (req, res) => {
   return res.json(req.body);
})*/


//modules.exports = routes;


//mongoose.connect => conexão como o DB 
//url do servidor da mongodb, a partir do momento que criei um usuário e um db por lá, lembre de na url colocar sua senha e usuário
//se a conexão de erradao configure a versão pra uma menor ou maior

mongoose.connect('mongodb://wilhams:wilhams@meuapp-shard-00-00.yuq04.mongodb.net:27017,meuapp-shard-00-01.yuq04.mongodb.net:27017,meuapp-shard-00-02.yuq04.mongodb.net:27017/myapp?ssl=true&replicaSet=atlas-bvjouk-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,   //essa duas linhas são configurações do mongodb e para evitar uns avisos no terminal
    useUnifiedTopology: true,
})

app.use(express.json()); //para o express entender o formato json
app.use(routes);  
app.listen(3333);