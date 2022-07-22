var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('account', {
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