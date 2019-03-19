// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer.js');
const listaTareas = require('./listado/listado.js')
const actualizar = require('./actualizar/actualizar.js')
const borrar = require('./borrar/borrar.js')


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let lista = listaTareas.getListado();
        let counter = 1;
        console.log('Tareas por hacer:');
        for (let tarea of lista) {
            if (tarea.completado == false) {
                console.log(`${counter}. ${tarea.descripcion}`);
                counter += 1
            }
        }
        counter = 1
        console.log('Tareas completadas:');
        for (let tarea of lista) {
            if (tarea.completado == true) {
                console.log(`${counter}. ${tarea.descripcion}`);
                counter += 1
            }
        }
        break;

    case 'actualizar':
        let actualizado = actualizar.actualizarTarea(argv.descripcion, argv.completado)
        break;

    case 'borrar':
        let item = borrar.borrarTarea(argv.descripcion)
        break;

    default:
        console.log('Comando no reconocido');

}