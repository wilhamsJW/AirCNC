const express = require('express');      //express é uma framework para Node.js, existem diversas funcionalidades prontas dentro dele, inclusive as rotas da aplicação
const mongoose = require('mongoose');   //mongoose = é uma lib ou ferramenta que irá ajudar a trabalhar com o mongodb; quando formos usar os métodos http iremos usar o mongoose
const routes = require('./routes');    //se coloca ./, se não o node entende q é uma dependecia, assim como express acima não tem ./ pq é uma dependeçia ou lib
const cors = require('cors');         //protege pra que niguém consuma minha api, apenas o endereço q eu solicitei dentro dele como exemplo abaixo
const path = require('path');        //para usar todas os caminhos da sua aplicação, path faz parte do express

const app = express(); //aqui o express está sendo usado pra facilitar nossas rotas, existem parenteses pq ele é uma funçao

/*
routes.post('users', (req, res) => {
   return res.json(req.body);
})*/


//modules.exports = routes;


//mongoose.connect => conexão como o DB 
//url do servidor da mongodb, a partir do momento que criei um usuário e um db por lá, lembre de na url colocar sua senha e usuário
//se a conexão de erradao configure a versão pra uma menor ou maior
// Há um video no meu drive explicando a instalação do mongoose (video da aircn semana oministack)

mongoose.connect('mongodb://wilhams:wilhams@meuapp-shard-00-00.yuq04.mongodb.net:27017,meuapp-shard-00-01.yuq04.mongodb.net:27017,meuapp-shard-00-02.yuq04.mongodb.net:27017/myapp?ssl=true&replicaSet=atlas-bvjouk-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,   //essa duas linhas são configurações do mongodb e para evitar uns avisos no terminal
    useUnifiedTopology: true,
})

/*********************************
 * Informação sobre o uso do CORS *
 * *******************************/
//app.use(cors( origin: 'http://localhost3333' )); //isso fará com que apenas esse endereço acesse minha API, mas como isso é um projeto de estudo vamos deixar sem nada

app.use(cors()); //assim permite q qualquer aplicação acesse minha API, porém isso não é algo em produção e sim para estudo 
app.use(express.json()); //para o express entender o formato json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))) //__dirname =>  dirname é uma variável global q informa qual o diretótio do arquivo atual e assim encaminha até a pasta solicitada 
                                                                           //mais explicações sobre __dirname estão no arquivo uploads
// express.static -> é uma forma que o express usa para lidar com arquivos estáticos, como: pdf, fotos etc..  
// geralmente usado quando temos algum tipo de upload na nossa aplicação 
app.use(routes);  
app.listen(3333);