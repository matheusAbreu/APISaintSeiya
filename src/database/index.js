const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Gods = require('../models/Gods');

const connection = new Sequelize(dbConfig);

Gods.init(connection);

module.exports = connection;
