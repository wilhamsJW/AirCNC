/** ---->>>> Informações sobre o projeto <<<<-----
 * 
 * Para rodar o projeto:  1 -> cd aulas, 2 -> cd backend, 3 -> npm run dev ou npm start, vai depender do q foi colocado no package.json do projeto, olhe e confira
 * tem que estar dentro da pasta exata pra rodar o projeto.
 * 
 * Instalado o node com chocolatey... depois é só rodar o comando cinst nodejs.install --version 10.16.3
 * dessa forma irá instalar o node e nom juntos pelo chocolatey
 * caso queira o yarn é só rodar choco install yarn
 * 
 * Font: https://github.com/tonsky/FiraCode
 * Após instalar a font bold dentro da pasta ttf do arquivo zipado, (clique na pasta duas vezes e instale uma font, a bold de preferençia)
 * após isso, dê um ctrl + shift + p e procure por settings.json e dentro do json coloque:
 * "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true
    prontinho! isso vai deixar o estilo do seu código mais bonito e lhe proporciona a união de
    caracteres como por exemplo colocar sinal de igual e sinal de maior formam uma seta => <->
 * 
 * Foi instalado o express com: npm i express -save
 * instalado nodemon que é uma dependecia para teste com: npm i nodemon -d, -d indica dependençia
 * use yarn dev para teste locais ou npm run dev
 * o nome dev foi colocado no packge.json em uma proprideadade chamada scripts
 * 
 * Instalado o insominia para executar os métodos, (para conusmir APIs) get, Post, Put e delete
 * o browser por padrão só executa o Get, usaremos o isominia para executar todos os métodos
 * 
 * Foi criado um servido pela mongodb, lá podemos colocar o banco de dados dessa aplicação de outras aplicações
 * 
 * Instalado uma dependecia chamada mongoose com npm i mongoose --save ou yarn add mongoose
 * mongoose => é uma lib ou ferramenta para facilitar trabalhar com o monogodb e facilitar com os métodos get,post,put e delete
 */

 
const express = require('express'); //express é uma framework para Node.js, existem diversas funcionalidades prontas dentro dele, inclusive as rotas da aplicação
//const mongoose = require('mongoose');
const routes = require('./routes'); //se coloca ./ pq se não o node entende q é uma dependecia.


const app = express(); //aqui o express está sendo usado pra facilitar nossas rotas, existem parenteses pq ele é uma funçao

/*
//mongoose.connect => conexão como o DB 
//url do servidor da mongodb, a partir do momento que criei um usuário e um db por lá, lembre de na url colocar sua senha e usuário
mongoose.connect('mongodb://aircnc:aircnc80@aircnc-shard-00-00.jghmx.mongodb.net:27017,aircnc-shard-00-01.jghmx.mongodb.net:27017,aircnc-shard-00-02.jghmx.mongodb.net:27017/aircnc?ssl=true&replicaSet=atlas-hb60ts-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,   //essa duas linhas são configurações do mongodb e para evitar uns avisos no terminal
    useUnifiedTopology: true,
})*/

app.use(express.json()); 
app.use(routes);  

//app.listen(3333);



/**Lembrete: A cada alteração no node terá que reinciar o servidor o node por si só não enxerga novas
 * alterações no código. Temos uma solução: Instalar uma lib chamada nodemom, yarn add nodemon -D ou npm install nodemom
 * esse -D é pra avisar que essa depencia é apenas pra desenvolvimento do projeto e em produção não se usa
 * isso. ele irá pra devDependecies que siginifica dependecias q serão usada em apenas usadas em ambiente de desenvolvimento
 * 
 * Após instalar o Nodemom, vá em package.json e acrescente =>  
 * "scripts": {
    "dev": "nodemon src/server.js"
  },

  Após isso só rodar yarn dev ou npm run dev
 */



//Enviando uma informação com formato JSON
//Navegadores só aceitam o método get, para usar outros métodos terá que usar uma ferramenta para isso
//estou usando o insominia para testar nossas rotas e requisições

app.post('/users', (req, res) => {
   return res.json( { 'message': 'hello word, Welcome Wilhams'});
});

app.listen(7575); 



//Utilizando o método post
/*
app.post('/', (req, res) => {                                     //req = request ou solicitação, res = response ou resposta

 return res.send('Hello Word!');                              //res.send, apenas para teste. isso enviará uma reposta ao browser.
 //return res.json({ message: 'Testando o Post com Isominia' }); //com json se envia um objeto ou um array, message passa a ser uma propriedade com o valor de hello word
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

   app.use(routes);                        //obrigatoriamente tem q vir depois do express.json(); se não ele não vai funcionar, ele lê por fila                                           
/*
   app.put('/users/:id', (req, res) => {                                                                            
    return res.json({ id: req.body }); 
   }); */


//app.listen(3333);



/**
 * Tipos de método
 * Get, Post, Put e delete
 * 
 * Get = utilizado para buscar informação no backend como rotas ou listar algo que venha do db
 * Post = cria nova informação no bakcend ou no db
 * Put = editar alguma informaçãpo
 * Delete = deletar
 */