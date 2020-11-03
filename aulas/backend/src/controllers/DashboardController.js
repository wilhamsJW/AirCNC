const Spot = require('../models/Spot');

/**************************************************** 
 * Exibindo tecnologias escolhidas pela id do user  * 
 * **************************************************/

module.exports = {
    async show(req, res) { 
        const { user_id } = req.headers; //req.headers => é o id guardado no localStorage no momento q crio o usuário

        //Spot.find => procure no Spot.js algum usuário com esse id => user: user_id, e me traga tudo sobre ele
        const spots = await Spot.find({ user: user_id });  //Spot => é o requerido acima na linha 1
                                                          //user_id => é o type: mongoose.Schema.Types.ObjectId dentro Spot.js, o mongoose gera essa id de forma automática
                                                         //user => é a chave dentro de Spot.js  

        return res.json(spots);
    }
}