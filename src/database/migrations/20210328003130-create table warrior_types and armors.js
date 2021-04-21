module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('warrior_types', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
      },
      class_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      god_id: {
        type: Sequelize.UUID,
        allowNull: false,
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
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
      },
      version: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      warrior_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'warrior_types', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('warrior_types');
    await queryInterface.dropTable('armors');
  },
};