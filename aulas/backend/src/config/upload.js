const multer = require('multer');
const path = require('path');

module.exports = {

    storage: multer.diskStorage({

        //local onde será guardada as imagens do upload
       destination: path.resolve(__dirname, '..', '..', 'uploads'),  //estamos usando o path resolve pra ficar algo entendido á maquina sobre o caminho pra se chegar até a pasta uploads, poderia usar isso -> ../ mas as vezes o widows não entende esse / e usa barra ao contrário...
                                                                    //então com path.resolve os caminhos são  separados por .. e vírgula e então o path resolve coloca a barra correta no seu sistema operacional, dirname é uma variável global q informa qual o diretótio do arquivo atual e assim encaminha até a pasta solicitada
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`); //path.extname(file.originalname) busca a extensão da imagem   
    } 

    }),
}