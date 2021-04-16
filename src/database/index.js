const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Gods = require('../models/Gods');
const WarriorTypes = require('../models/WarriorTypes');
const Armors = require('../models/Armors');

const connection = new Sequelize(dbConfig);

Gods.init(connection);
WarriorTypes.init(connection);
Armors.init(connection);


Gods.associate(connection.models);
WarriorTypes.associate(connection.models);
Armors.associate(connection.models);

module.exports = connection;
