//Aqui se encontra tudo relaciona a sessão, como login, logout etc..

/**
 * Teremos aqui alguns métodos, sendo eles: index, show, store, upadate e destroy
 * index => método que cria ou retorna uma listagem da Session
 * show  => lista uma única sessão
 * store => criar uma sessão
 * update => alterar uma sessão
 * destroy => remover, deletar ou destruir uma sessão
 * 
 * esses são métodos disponiveis dentro de um controller. 
 */

module.exports = {
    store(req, res) {
        return res.json({ message: 'Hello!' })
    }
};