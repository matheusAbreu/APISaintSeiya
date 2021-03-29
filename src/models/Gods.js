const { Model, DataTypes, Utils } = require("sequelize");

class Gods extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            human_name: DataTypes.STRING, //optional
            date_of_birth: DataTypes.DATE, //optional
            responsible_for: DataTypes.STRING,//optional
            resume: DataTypes.STRING,//optional
            images: DataTypes.ARRAY(DataTypes.TEXT),//optional
        }, {
            sequelize: connection
        });
    }

    static associate(models) {
        this.hasMany(models.WarriorTypes, { foreignKey: 'god_id', as: 'myWarriors' });
        //this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
        //this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
    }
};

module.exports = Gods;