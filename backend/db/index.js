const Sequelize = require('sequelize');
const dbConfig = require('../config/config.js');

const sequelize = module.exports = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect : dbConfig.dialect
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.account = require('./models/account.js')(sequelize, Sequelize);
db.credentials = require('./models/credentials.js')(sequelize, Sequelize);

db.account.hasOne(db.credentials);
db.credentials.belongsTo(db.account, {foreignKey : 'emailId'});

module.exports = db;