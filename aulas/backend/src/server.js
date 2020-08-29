/**Foi instalado o express com npm i express -save
 * instalado nodemon que é uma dependecia para teste com npm i nodemon -d, -d indica depençia
 * use yarn dev para teste locais ou npm run dev
 * o nome dev foi colocado no packge.json em uma proprideadade cahamda scripts
 */

const express = require('express'); //express é uma framework para Node.js, existem diversas funcionalidades prontas dentro dele, inclusive as rotas da aplicação
const { response } = require('express');

const app = express();

app.get('/', (req, res) => {

 //return res.send('Hello Word!'); //res.send, apenas para teste. isso enviará uma reposta ao browser.
 return res.json({ message: 'Hello Word! Wilhams Júnior!' }); //com json se envia um objeto ou um array, message passa a ser uma propriedade com o valor de hello word
});

app.listen(3333);

/**
 * Tipos de método
 * Get, Post, Put e delete
 * 
 * Get = utilizado para buscar informação no backend como rotas ou listar algo que venha do db
 * Post = cria nova informação no bakcend ou no db
 * Put = editar alguma informaçãpo
 * Delete = deletar
 */