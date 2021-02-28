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
};

module.exports = Gods;