
const { UuidInEachDialect } = require("../../utils");
const { DB_DIALECT } = process.env;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gods', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal(UuidInEachDialect[DB_DIALECT]),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      human_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: true
      },
      responsible_for: {
        type: Sequelize.STRING,
        allowNull: true
      },
      resume: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gods');
  },
};