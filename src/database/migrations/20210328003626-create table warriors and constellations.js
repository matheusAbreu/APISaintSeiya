const { UuidInEachDialect } = require("../../utils");
const { DB_DIALECT } = process.env;


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('constellations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal(UuidInEachDialect[DB_DIALECT]),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
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

    await queryInterface.createTable('warriors', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal(UuidInEachDialect[DB_DIALECT]),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: true
      },
      resume: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      constellation_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'constellations', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

    await queryInterface.addColumn("armors", "constellation_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: 'constellations', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("armors", "constellation_id");
    await queryInterface.dropTable('warriors');
    await queryInterface.dropTable('constellations');
  },
};

/*
      constellation_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'constellations', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
 */