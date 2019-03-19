const argv = require('yargs')
    .command('crear', 'Crear un elemento', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de una tarea'
        }
    })
    .command('actualizar', 'Actualizar un elemento', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de una tarea'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Tarea completada o pendiente'
        }
    })
    .command('borrar', 'Borrar un elemento', {
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'Descripcion de una tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}