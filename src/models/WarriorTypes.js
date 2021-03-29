const { Model, DataTypes, Utils } = require("sequelize");

class WarriorTypes extends Model {
    static init(connection) {
        super.init({
            class_name: DataTypes.STRING
        }, {
            sequelize: connection,
            tableName: 'warrior_types'

        });
    }
    static associate(models) {
        this.belongsTo(models.Gods, { foreignKey: 'god_id', as: 'myGod' });
        //this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
};

module.exports = WarriorTypes;