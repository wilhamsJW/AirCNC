const User = require('../models/User'); //importando o schema, aí se encontra o email ou todos os registros de um cliente de cadastro se caso tivesse nesa aplicação

//Aqui se encontra tudo relacionado a sessão, como login, logout etc..
/**
 * Teremos aqui alguns métodos, sendo eles: index, show, store, upadate e destroy
 * index => método que cria ou retorna uma listagem de Sessions ou sessões
 * show  => lista uma única sessão
 * store => criar uma sessão
 * update => alterar uma sessão
 * destroy => remover, deletar ou destruir uma sessão
 * 
 * esses são métodos disponiveis dentro de um controller. 
 */

module.exports = {
    async store(req, res) {
        //Apenas para teste, estou usando o isomonia para realizar esses teste
        //return res.json({ message: 'HelloO!' })

        /**Aqui vamos pegar o email que o usuáraio cadastrou, o email vem do req.body
         * Temos uma explicação disso no arquivo serverteste.js nessa mesma pasta
         */

         //Podemos fazer dessa forma:
         //const email = req.body.email

         //E dessa forma, usando o destructuring com {}
         //irá buscar email dentro de req.body
         const { email } = req.body;


         //Variável pra verificar usuário existente                                         
         let user = await User.findOne({email: email}); //método find tem vários parãmetro pra fazer busca, um deles é findOne busca por id 
           if(!user) {    //se isso aqui não vier setado ou seja aqui dentro não vai ter um email cadastrado em User (User é um arquivo q está cadastrando os emails) o if irá executar a ação de criar um novo email 
                 const user = await User.create({email});  //await só deixará a próxima linha ser executada quando essa informação for finalizadsa no bd
                                                          //para usarmos await temos q usar o async no inicio da função
              } 
                                          
         return res.json(user); //resposta no formato de JSON                                        
    

    }
};