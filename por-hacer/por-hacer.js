const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {

    listadoPorHacer = require('../db/data.json');

}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })

}

const crear = (descripcion) => {

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB()

    return porHacer;

}

module.exports = {
    crear
}