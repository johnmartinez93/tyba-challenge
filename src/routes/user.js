const { protectedRoutes } = require("../middleware/protectedRoutes.js");

module.exports = app => {
    const user = require("../controllers/user.js");

    let router = require("express").Router();

    router.post("/", user.create);
    router.get("/:id", (req, res, next) => protectedRoutes(req, res, next, app) ,user.findOne);

    app.use('/api/users', router);
};