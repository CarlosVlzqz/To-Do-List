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

const borrarTarea = (descripcion) => {

    cargarDB()

    let nuevaLista = listado.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listado.length !== nuevaLista.length) {
        listado = nuevaLista
        guardarDB();
        return true
    } else {
        return false
    }

}

module.exports = {

    borrarTarea

}