var Sequelize = require('sequelize');
const { user } = require('../index.js');
var db = require('../index.js');

module.exports = (sequelize, Sequelize) => {
    const User = db.define('user', {
        name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        email : {
            type : Sequelize.STRING,
            allowNull : false,
            primaryKey : true
        },
        address : {
            type : Sequelize.STRING,
        }
    });
    return User;
};
