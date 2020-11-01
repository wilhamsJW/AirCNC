const mongoose = require('mongoose');

//Aqui temos dois registros, o registro de qual usuário quer fazer uma reserva e o registro de qual modalidade que o usuárioq uer fazer a reserva
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,   //Aqui vai receber a solitação de reserva do user, valor Boolean comecará com null, se a solicitação for rejeitada pela empresa
                        //será false, se for aceita sera true

    //Registro do user que quer fazer a reserva
    user: {
        type: mongoose.Schema.Types.ObjectId, //Quando o usuário é criado com email, o insominia gera uma id, é justamente essa id q estou peganda aqui
        ref: 'User'
    },
    
    //Registro da modalidade escolhida pelo usuário
    //spot é considerado como as tecnologias escolhidas pelo usuário e a empresa q fornece aquela tecnologia
    //preciso saber a spot que o user quer fazer a reserva
    spot: {
        type: mongoose.Schema.Types.ObjectId, //Quando o usuário é criado com email, o insominia gera uma id, é justamente essa id q estou pegandao aqui
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema)