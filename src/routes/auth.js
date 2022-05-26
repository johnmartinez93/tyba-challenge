module.exports = app => {
    const auth = require("../controllers/auth.js");

    let router = require("express").Router();

    router.post("/auth", (req, res) => auth.login(req, res, app));

    app.use('/api', router);
};