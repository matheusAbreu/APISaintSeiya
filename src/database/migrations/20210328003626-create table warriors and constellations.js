module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('warriors', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
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
      images: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
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

    await queryInterface.createTable('constellations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
      },
      armor_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'armors', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      warrior_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'warriors', key: 'id' },
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('warriors');
    await queryInterface.dropTable('constellations');
  },
};