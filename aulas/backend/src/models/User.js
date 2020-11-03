const mongoose = require('mongoose'); //conexão com o Db utilizando o mongoose que facilita nossa conexão com o mongodb


/****************************************************
 * O CONTROLLER DESSE MODEL É O SessionController.js *
 * **************************************************/


//Schema = isso é basicamente qual que é o esquema do nosso usuário ou seja qual é a estrutura do nosso usuario
//aqui colocamos quais os campos que o user vai ter e os tipos, 
//exemplo de campos: nome,email,idade,whatsapp... ex. de tipos: string. number, boolean etc..
const UserSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User', UserSchema); //primeiro parãmetro é nome do model, nesse caso é User
                                                    //2° parãmetro é o Schema dele, que é o UserSchema