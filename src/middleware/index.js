const bcrypt = require("bcryptjs");

exports.hashPassword = async (req, res, next) => {
    try{
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error)
        res.status(500).send({err: error.message});
    }
};