const { DataTypes } = require('sequelize');
const database = require('../database/data/database');


const user = database.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate : {
            is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        },
    },
    age: {
        type: DataTypes.INTEGER,
        min: 1,
        allowNull: false,
    },
}); 

module.exports = user;