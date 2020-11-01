const { store } = require("./SessionController");

const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;  //Buscando o user logado que quer fazer a reserva

        const { spot_id } = req.params; //req.params => os parâmetros q vem da rota em routes.js
                                       //este é parãmetro => routes.post('/spot/:spot_id/bookings', BookingController.store);
                                      //estou pegando essa spot_id 

        const { date } = req.body; //pegando a data do corpo da requisição

        //Aqui está mostrando as informações escolhidas pelo user como a id dele e a spot escolhida, porém apenas as id's
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        /**Aqui irá mostrar as informações do user e o spot ao invés de mostrar só as id's como no código acima
         * irá trazer o email, a foto carregada, nome da empresa, preõ, data ou seja tudo q tem a ver com o usuário e com
         * as spot escolhida
        */
        await booking.populate('spot').populate('user').execPopulate();

        /**populate => método para popular o spot e popular o user
         * execPopulate() => irá executar o populate
         */
        
        return res.json(booking);
    }
};