const sequelize = require("../db/connection");
const { DataTypes } = require('sequelize');

const Table = sequelize.define('LeadBoard', {

    score: {
        type: DataTypes.INTEGER,
        allowNull: true 
    }
});

module.exports = Table;