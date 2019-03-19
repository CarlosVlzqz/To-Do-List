let listado = []

const getListado = () => {

    listado = require('../db/data.json');
    return listado

}


module.exports = {
    getListado
}