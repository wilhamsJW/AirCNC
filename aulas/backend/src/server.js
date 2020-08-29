/**Informações sobre o projeto
 * 
 * Foi instalado o express com npm i express -save
 * instalado nodemon que é uma dependecia para teste com npm i nodemon -d, -d indica depençia
 * use yarn dev para teste locais ou npm run dev
 * o nome dev foi colocado no packge.json em uma proprideadade chamada scripts
 * 
 * Instalado o insominia para executar os métodos, get, Post, Put e delete
 * o browser por padrão só executa o Get, usaremos o isominia para executar todos os métodos
 * 
 * Foi criado um servido pela mongodb, lá podemos colocar o banco de dados dessa aplicação de outras aplicações
 */

const express = require('express'); //express é uma framework para Node.js, existem diversas funcionalidades prontas dentro dele, inclusive as rotas da aplicação
const routes = require('./routes'); //se coloca ./ pq se não o node entende q é uma dependecia.

const app = express();

app.use(express.json()); 
app.use(routes);  

app.listen(3333);





//Utilizando o método post
/*
app.post('/', (req, res) => {                                     //req = request ou solicitação, res = response ou resposta

 //return res.send('Hello Word!');                              //res.send, apenas para teste. isso enviará uma reposta ao browser.
 return res.json({ message: 'Testando o Post com Isominia' }); //com json se envia um objeto ou um array, message passa a ser uma propriedade com o valor de hello word
});*/





//Uttlizando o método get e query params  => req.query => acessar query params para filtros
/*
app.get('/users', (req, res) => {                                                                   
    return res.json({ idade: req.query.idade }); 
   });*/




//Utilizando método put e query params => req.params => acessar routes para edição ou delete   
/*
app.put('/users/:id', (req, res) => {                                                                            
    return res.json({ id: req.params.id }); 
   });*/





//utilizando o método post e query body => query.body => acessar corpo da requisição para edição ou deleção   
/*
   app.use(express.json());                  //preciso fazer isso pq o express não lê em JSON, então preciso falar pra ele
                                            //lê em JSON, é como que isso fosse plugin, algo pra ajudar o express a entender o JSON

   app.use(routes);                        //obriogatoriamente tem q vir depois do express.json(); se não ele não vai funcionar, ele lê por fila                                           
/*
   app.put('/users/:id', (req, res) => {                                                                            
    return res.json({ id: req.body }); 
   }); 


app.listen(3333);*/



/**
 * Tipos de método
 * Get, Post, Put e delete
 * 
 * Get = utilizado para buscar informação no backend como rotas ou listar algo que venha do db
 * Post = cria nova informação no bakcend ou no db
 * Put = editar alguma informaçãpo
 * Delete = deletar
 */