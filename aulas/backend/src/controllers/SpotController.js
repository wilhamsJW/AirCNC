const Spot = require('../models/Spot');
const User = require('../models/User');

/****************************************************************
 *  Este arquivo está controlando o Spot.js e User.js em models *
 * **************************************************************/

//const { store } = require("./SessionController");

// Listagem quando usuário escolhe alguma tecnologia
module.exports = {

    //Filtro para quando o usuário for buscar alguma informação
    async index(req, res) {            //index foi uma requisição criada no insominia, lá eu coloquei um nome e valor, q irá levar o user a rota da escolha da informação q ele escolheu
        const { tech } = req.query;   //req.query => acessar query params para filtros  

        //Listar apenas as informações da escolha do usuário
        const spots = await Spot.find({ techs: tech }); //techs => é o nosso campo no db em Spot.js, tech é o valor acima q virá com um valor dentro, 
                                                       //tech => valor da informação que o usuário escolheu
                                                      //Suponhamos q dentro de tech tenha a escolha chamada de => "laravel"
                                                     //Spot.find => vai procurar "laravel" dentro de techs

        return res.json(spots);

    },

    //Armazenamento de dados no banco e arquivos upload
    async store(req, res) {

        const { filename } = req.file; //filename => local onde tem o nome da minha imagem guardada, essa informação se encontra no upload.js
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;  //essa id é a que é gerada de forma automática pelo mongodb, definir ela no headers do insominia apenas para consumir a API e estou pegando ela aqui
                                         //na aplicação em produção pego essa user_id do localStorage

        //Verificação pra ver se o usuário existe, pra não criar algo no bd sem usuário
        const user = await User.findById(user_id);
        if(!user) {
            return res.status(400).json({ERROR: 'User does not exists'});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),  //Publicações foi definida que seria um array, 
                                                              //o split => irá definir a vírgula como separador de cada item do meu array
                                                             //o map => irá percorrer todos os itens do meu array
                                                            //trim => tira espaços antes e depois de cada string ou item do array
            price  
        })

        //console.log(req.body);  //
        //console.log(req.file); //só temos o file por conta do multer  
        return res.json(spot);
    }
};