var Sequelize = require('sequelize');
var db = require('../index.js');
var crypto = require('crypto');

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
            set : function(plaintext){
                this.setDataValue('password', this.hashPassword(plaintext));
            }
        },
        salt : {
            type : Sequelize.STRING,
            defaultValue : function(){
                return crypto.randomBytes(16).toString('base64');
            }
        },
        address : {
            type : Sequelize.STRING,
        }
    });
    
    User.prototype.hashPassword = function(plaintext){
        return crypto.pbkdf2Sync(plaintext, this.salt, 10000, 64, 'sha256').toString('base64');
    };
    return User;
};
