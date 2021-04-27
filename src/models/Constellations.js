const { Model, DataTypes, Utils } = require("sequelize");

class Constellations extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize: connection,
            tableName: 'constellations'

        });
    }
    static associate(models) {
        //this.belongsTo(models.Gods, { foreignKey: 'god_id', as: 'myGod' });
        //this.hasMany(models.Armors, { foreignKey: 'warrior_type_id', as: 'whatTypeWarriorIsHe' });
        //this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
};

module.exports = Constellations;