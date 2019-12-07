const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);


// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)


//codigo mio
// lugar.getLugarLatLng(argv.direccion)
//     .then(latylong => {
//         clima.getClima(latylong.lat, latylong.lng)
//             .then(respuestaClima => console.log(`el clima de ${latylong.direccion} es de ${respuestaClima}`))
//             .catch(err => console.log(`no se puede determinar el clima de ${argv.direccion}`))
//     })
//     .catch(errClima => console.log(`no se puede determinar el clima de ${argv.direccion}`));
//codigo mio

//de la clase
const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `el clima de ${coords.direccion} es de ${temp}.`;
    } catch (error) {
        return `no se puede determinar el clima de ${argv.direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

//24a2d9c712771a38a16e1bf2cd7f3b35
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}