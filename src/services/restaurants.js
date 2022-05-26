const axios = require('axios');
const { tomTomSecretKey } = require('../../config/tomtom');

exports.getListRestaurants = async (lat, lon) => {
    let config = {
        method: 'get',
        url: `https://api.tomtom.com/search/2/categorySearch/restaurant.json?lat=${lat}&lon=${lon}&view=Unified&relatedPois=off&key=${tomTomSecretKey}`,
        headers: { }
    };

    const { data } = await axios(config)

    return data.results
}