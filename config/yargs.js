const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'descripcion de la ciudad para el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}