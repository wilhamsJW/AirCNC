const mongoose = require('mongoose');

/**Lembrete: instalamos uma ferramenta chamada multer com yarn add multer, ela serve pra lidar com formatos Multipart form, que serve pra lidar com uploads de imagens
 * dentro da pasta config temos um arquivo chamado upload com as configurações dessa lib
  */

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String], //isso aqui vai ser um array com várias strings dentro
    user: {
        type: mongoose.Schema.Types.ObjectId, //Quando o usuário é criado com email, o insominia gera uma id, é justamente essa id q estou pegandao aqui
        ref: 'User'
    }



});

module.exports = mongoose.model('Spot', SpotSchema)