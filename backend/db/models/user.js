var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('user', {
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
