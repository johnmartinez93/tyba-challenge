require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

const db = require("./src/models");
const auth = require("./config/auth");

const app = express();

const PORT = process.env.NODE_DOCKER_PORT || 3000;

const corsOptions = {
    origin: "http://localhost:3000"
};

app.set('secretKey', auth.secretKey);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Hello world." });
});

require("./src/routes/user")(app);
require("./src/routes/auth")(app);
require("./src/routes/restaurant")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});