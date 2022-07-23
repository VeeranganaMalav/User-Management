var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = (sequelize, Sequelize) => {
    const User = db.define('user', {
        firstName : {
            type : Sequelize.STRING,
            allowNull : false
        },
        lastName : {
            type : Sequelize.STRING,
            allowNull : false
        },
        email : {
            type : Sequelize.STRING,
            allowNull : false,
            primaryKey : true
        },
        password : {
            type : Sequelize.STRING,
        },
        address : {
            type : Sequelize.STRING,
        }
    });
    return User;
};
