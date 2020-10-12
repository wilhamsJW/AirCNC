const Spot = require('../models/Spot');

//const { store } = require("./SessionController");

module.exports = {
    async store(req, res) {

        const { filename } = req.file; //filename => local onde tem o nome da minha imagem guardada, essa informação se encontra no upload.js
        const { company, techs, price } = req.body;
        const { user_id } = req.headers; //essa id é a que é gerada de forma automática pelo insominia, definir ela no headers do insominia e estou pegandao ela aqui

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            //phone: Number,
            techs: techs.split(',').map(tech => tech.trim()), //Publicações foi definida que seria um array, o split irá definir a vírgula como separador de cada item do meu array, o map irá percorrer todos os itens do meu array e o trim tira espaços antes e depois de cada string ou item do array
            price  
        })

        //console.log(req.body);
        //console.log(req.file);
        return res.json(spot);
    }
};