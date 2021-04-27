
const { UuidInEachDialect } = require("../../utils");
const { DB_DIALECT } = process.env;


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('warrior_types', {
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
      god_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: 'gods', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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

    await queryInterface.createTable('armors', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal(UuidInEachDialect[DB_DIALECT]),
        allowNull: false,
      },
      version: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      warrior_type_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: 'warrior_types', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    await queryInterface.dropTable('warrior_types');
    await queryInterface.dropTable('armors');
  },
};