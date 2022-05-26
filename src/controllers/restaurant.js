const axios = require('axios');
const { getListRestaurants } = require('../services/restaurants');
exports.list = async (req, res) => {
    if (!req.query.lat || !req.query.lon) {
        res.status(400).send({
            message: "Params Latitude and Longitude can not be empty!"
        });
        return;
    }

    const {lat, lon} = req.query

    try {
        const restaurants = await getListRestaurants(lat, lon)

        res.send({
            restaurants
        });
    } catch (error) {
        res.status(500).send({
            error: error.message,
            message: "Error retrieving restaurants list"
        });
    }
}