const User = require('../models/User'); //importando o schema, aí se encontra o email ou todos os registros de um cliente de cadastro se caso tivesse nesa aplicação

module.exports = {
    async store(req, res) {
        //Apenas para teste, estou usando o isomonia para realizar esses teste
        //return res.json({ message: 'HelloO!' })

        /**Aqui vamos pegar o email que o usuário cadastrou, o email vem do req.body
         * req.body => é apenas o corpo da aplicação, exepmplo: um formulário q envia um email é considerado o req.body
         * Temos uma explicação disso no arquivo INFORMAÇÂO.js nessa mesma pasta
         */

         //Podemos fazer dessa forma:
         //const email = req.body.email
         //E dessa forma, usando o destructuring com => {}
         //irá buscar email dentro de req.body
         //fazemos isso pq usamos o nome da const igual ao nome do corpo que é email
         //req.body é uma propriedade da requisição, se vc dê um console em req vc irá várias info vindo da requisição do front
         //e verá q as informações enviadas chegam no body
         const { email } = req.body;
        //  console.log('req', req)


         //Variável pra verificar usuário existente, ela procura o email vindo do req.body e verifica se existe no banco, se não existir, essa
         //variável será false, sendo false eu faço o if abaixo, verificando se é falso, se é falso, siginifica q o email é novo e não existe no banco
         //e assim será criado um novo email
         
         let user = await User.findOne({email: email}); //findOne => método find tem vários parãmetro pra fazer busca, um deles é findOne busca por id 
           if(!user) {    //se isso aqui não vier setado ou seja aqui dentro não vai ter um email cadastrado em User (User é um arquivo q está cadastrando os emails) o if irá executar a ação de criar um novo email 
                 const user = await User.create({email});  //await só deixará a próxima linha ser executada quando essa informação for finalizadsa no bd
                                                          //para usarmos await temos q usar o async no inicio da função
              } 
                                          
         return res.json(user); //resposta no formato de JSON, essa resposta é justamente 
                               //o que aparece no console no momento que o o form é submetido, vemos esse console em 
                              //App.js no frontend, dentro da function handleSubmit(e)                                           
    

    }
};