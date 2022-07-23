var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = (sequelize, Sequelize) => {
    const Account = db.define('account', {
        email : {
            type : Sequelize.STRING,
            allowNull : false
        },
        password : {
            type : Sequelize.STRING,
        }
    });
    return Account;
};
