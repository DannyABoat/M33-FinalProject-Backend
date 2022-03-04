const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize = new Sequelize (process.env.MYSQL_URI);

let connection = async() => {
    try {
        await sequelize.authenticate()
        console.log("Connected To Database")
    } catch (error) {
        console.log(error)
    }
};

connection()

module.exports = sequelize