const jwt = require('jsonwebtoken')

exports.protectedRoutes = async (req, res, next, app) => {
    const token = req.headers["access-token"];

    if (token) {
        jwt.verify(token, app.get("secretKey"), (err, decoded) => {
            if (err) {
                return res.send({ message: "Invalid token" });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(500).send({
            message: "Empty token",
        });
    }
}