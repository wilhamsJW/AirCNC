const mongoose = require('mongoose');

/**Lembrete: instalamos uma ferramenta chamada multer com yarn add multer, ela serve pra lidar com formatos Multipart form, que serve pra lidar com uploads de imagens
 * dentro da pasta config temos um araquivo chamado upload com as configurações dessa lib
  */

const RevisitSchema = new mongoose.Schema({
    photo: String,
    name: String,
    phone: Number,
    content: String,
    publicacoes: [String], //isso aqui vai ser um array com várias strings dentro
    user: {
        type: mongoose.Schema.Types.ObjectId, //Quando o usuário é criado com email, o insominia gera uma id, é justamente essa id q estou pegandao aqui
        ref: 'User'
    }



});

module.export = mongoose.model('Revisit', RevisitSchema);