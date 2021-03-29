const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Gods = require('../models/Gods');
const WarriorTypes = require('../models/WarriorTypes');

const connection = new Sequelize(dbConfig);

Gods.init(connection);
WarriorTypes.init(connection);


Gods.associate(connection.models);
WarriorTypes.associate(connection.models);

module.exports = connection;
