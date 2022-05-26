const { protectedRoutes } = require("../middleware/protectedRoutes.js");

module.exports = app => {
    const restaurant = require("../controllers/restaurant.js");

    let router = require("express").Router();

    router.get("/list", (req, res, next) => protectedRoutes(req, res, next, app), restaurant.list);

    app.use('/api/restaurants', router);
};