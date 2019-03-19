const fs = require('fs');

let listado = []

const cargarDB = () => {

    listado = require('../db/data.json');
    return listado

}

const guardarDB = () => {

    let data = JSON.stringify(listado);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })

}

const actualizarTarea = (descripcion, completado = true) => {

    cargarDB()
    let index = listado.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })

    if (index >= 0) {
        listado[index].completado = completado;
        guardarDB();
        return true
    } else {
        return false
    }

}

module.exports = {

    actualizarTarea

}