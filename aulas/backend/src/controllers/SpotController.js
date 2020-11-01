const Spot = require('../models/Spot');
const User = require('../models/User');

/***************************************************
 *  Este arquivo está armazenado informações no BD *
 * *************************************************/

//const { store } = require("./SessionController");

// Listagem quando usuário escolhe alguma tecnologia
module.exports = {

    //Filtro para quando o usuário for buscar alguma informação
    async index(req, res) {            //index foi uma requisição criada no insominia, lá eu coloquei um nome e valor, q irá levar o user a rota da escolha da informação q ele escolheu
        const { tech } = req.query;   //buscando tech em req.query pq coloquei no query do insominia o valor como o nome tech

        //Listar apenas as informações da escolha do usuário
        const spots = await Spot.find({ techs: tech }); //techs é o nosso campo no db, tech é o valor acima q virá com um valor dentro, 
                                                       //esse valor dentro dele é a escolha da informação que o usuário escolheu

        return res.json(spots);

    },

    //Armazenamento de dados no banco e arquivos upload
    async store(req, res) {

        const { filename } = req.file; //filename => local onde tem o nome da minha imagem guardada, essa informação se encontra no upload.js
        const { company, techs, price } = req.body;
        const { user_id } = req.headers; //essa id é a que é gerada de forma automática pelo mongodb, definir ela no headers do insominia e estou pegando ela aqui

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