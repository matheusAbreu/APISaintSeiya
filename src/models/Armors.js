const { Model, DataTypes, Utils } = require("sequelize");

class Armors extends Model {
    static init(connection) {
        super.init({
            version: DataTypes.STRING,
            resume: DataTypes.STRING,
            images: DataTypes.ARRAY(DataTypes.TEXT)
        }, {
            sequelize: connection,
            tableName: 'Armors'

        });
    }
    static associate(models) {
        this.belongsTo(models.WarriorTypes, { foreignKey: 'warrior_type_id', as: 'myWarriorType' });
        //this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
};

module.exports = Armors;