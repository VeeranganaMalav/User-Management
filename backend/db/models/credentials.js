var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('credentials', {
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
    }
});