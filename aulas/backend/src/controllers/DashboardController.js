const Spot = require('../models/Spot');

/**************************************************** 
 * Exibindo tecnologias escolhidas pela id do user  * 
 * **************************************************/

module.exports = {
    async show(req, res) { 
        const { user_id } = req.headers; //req.headers => é o id guardado no localStorage no momento q crio o usuário

        const spots = await Spot.find({ user: user_id });

        return res.json(spots);
    }
}