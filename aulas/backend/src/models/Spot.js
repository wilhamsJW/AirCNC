const mongoose = require('mongoose');

/**Lembrete: instalamos uma ferramenta chamada multer com yarn add multer, ela serve pra lidar com formatos Multipart form, que serve pra lidar com uploads de imagens
 * dentro da pasta config temos um arquivo chamado upload com as configurações dessa lib
  */

const SpotSchema = new mongoose.Schema({
    thumbnail: String, 
    company: String,
    price: Number,
    techs: [String], //isso aqui vai ser um array com várias strings dentro por isso q tá dessa forma
    user: {
        type: mongoose.Schema.Types.ObjectId, //Quando o usuário é criado com email, o mongoose gera uma id, é justamente essa id q estou pegandao aqui
        ref: 'User'
    }
    // Aqui abaixo estamos passando algumas configurações para o mongoose, fazemos isso após fechar o primeiro objto
    // uma dessas configurações é o toJSONe uma de suas propriedades é o 'virtuals'
    // virtuals: true -> toda vez que esse spot for convertido em JSON, quero que calcule o virtuals, o virtuals é a função
    // com a url abaixo
}, { 
   toJSON: {
       virtuals: true,
   } 
});

//Abaixo estamos criandao um campo que não existe no banco ou seja não está nesses dados acima, esse campo será criado pelo JS
//no mongo chamamos isso de 'virtual' 
// thumbnail_urlé apenas o nome do campo, em seguida fazemos um GET e abrimos uma function, tem function enão arrow function
// pq com a function consigo pegar qq propriedade com o this
// o caminho da url é o files, esse arquivo foi definido no server.js
SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema) //primeiro parãemetro é nome do model, nesse caso é Spot
                                                   //2° parãmetro é o Schema dele que é o SpotSchema