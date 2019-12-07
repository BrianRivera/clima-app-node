const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=24a2d9c712771a38a16e1bf2cd7f3b35`)
    return resp.data.main.temp;

}

module.exports = {
    getClima
}