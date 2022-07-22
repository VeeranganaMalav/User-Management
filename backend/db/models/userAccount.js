var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('userAccount', {
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : Sequelize.STRING
    },
    address : {
        type : Sequelize.STRING,
    }
});