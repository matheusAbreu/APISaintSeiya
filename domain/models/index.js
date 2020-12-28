const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../infrastructures/config/database');

const db = {};
const sequelize = new Sequelize(config);
const basename = path.basename(__filename);

fs
  .readdirSync(__dirname)
  .filter((file) => (
    file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'
  ))
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default;
    db[model.name] = model.init(sequelize);
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
