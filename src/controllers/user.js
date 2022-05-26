const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    try {
        const newUser = await User.create(user)

        res.send(newUser);
    } catch (error) {
        res.status(500).send({
            message:
            error.message || "Some error occurred while creating the User."
        });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const getUser = await User.findByPk(id)

        if (getUser) {
            res.send(getUser);
        } else {
            res.status(404).send({
            message: `Cannot find User with id=${id}.`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error retrieving User with id=" + id
        });
    }
};
