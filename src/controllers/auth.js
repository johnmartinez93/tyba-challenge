const jwt = require('jsonwebtoken')

const db = require("../models");
const User = db.users;

exports.login = async (req, res, app) => {
    if(!req.body.username && !req.body.password){
        res.status(400).send({
            message: "Username and password is required!"
        });
        return;
    }

    const user = await User.findByPk(req.body.username);

    if(req.body.username == user.username && req.body.password === user.password) {
        const payload = {
            check:  true
        };

        const token = jwt.sign(payload, app.get('secretKey'), {
            expiresIn: 1440
        });

        res.send({
            message: 'You are logged in!',
            token: token
        });
    } else {
        res.status(500).send({ message: "Incorrect username or password"})
    }
}