'use strict';

const { DB_DIALECT } = process.env;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    switch (DB_DIALECT) {
      case "postgres":
        return await queryInterface.sequelize.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
      default:
        return;
    }
    
  },

  down: async (queryInterface, Sequelize) => {
    switch (DB_DIALECT) {
      case "postgres":
        return await queryInterface.sequelize.query(`DROP EXTENSION IF EXISTS "uuid-ossp";`);
      default:
        return;
    }
  }
};