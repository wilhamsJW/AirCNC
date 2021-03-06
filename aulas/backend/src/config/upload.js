const multer = require('multer');

 /**Lembrete: instalamos uma ferramenta chamada multer com yarn add multer, ela serve pra lidar com formatos Multipart form, que serve pra lidar com uploads de imagens
* dentro da pasta config temos um arquivo chamado upload com as configurações dessa lib
 */
const path = require('path'); //estamos usando o path resolve pra ficar algo entendido á maquina sobre o caminho pra se chegar até a pasta uploads, poderia usar isso -> ../ mas as vezes o widows não entende esse / e usa barra ao contrário...
//então com path.resolve os caminhos são  separados por .. e vírgula e então o path resolve coloca a barra correta no seu sistema operacional, dirname é uma variável global q informa qual o diretótio do arquivo atual e assim encaminha até a pasta solicitada

module.exports = {

    storage: multer.diskStorage({    //multer diskstorage é uma forma de armazenar arquivos, esse método q estou usando server pra guardar nas pastas do meu projeto

        //local onde será guardada as imagens do upload
       destination: path.resolve(__dirname, '..', '..', 'uploads'),  //estamos usando o path resolve pra ficar algo entendido á maquina sobre o caminho pra se chegar até a pasta uploads, poderia usar isso -> ../ mas as vezes o widows não entende esse / e usa barra ao contrário...
                                                                    //então com path.resolve os caminhos são  separados por .. e vírgula e então o path resolve coloca a barra correta no seu sistema operacional
                                                                   //__dirname =>  dirname é uma variável global q informa qual o diretótio do arquivo atual e assim encaminha até a pasta solicitada 

    /** Informando qual nome do arquivo de foto terá, por padrão é colocado um nome qq  */                                                                
    filename: (req, file, cb) => {       //cb => callback 

        const ext = path.extname(file.originalname);          //path.extname => extensão que pega o nome do arquivo | //path.extname(file.originalname) busca a extensão da imagem   
        const name = path.basename(file.originalname, ext);  //path.basename => retorna o nome da imagem sem a extensão, ext é a extensão como segundo parãmetro para que o basename remova a extensão
        cb(null, `${name}-${Date.now()}${ext}`);            //null => é 1º parãmetro, é null pq caso tivesse um erro, retornaria null, mas aqui não há nehum cáclculo q gere erro
                                                           //Date.now => retorna o timestamp da data atual, isso garante tbm com q cada imagem seja única, caso duas ou mais pessoas envie uma foto no mesmo horário 
    },

    }),
};