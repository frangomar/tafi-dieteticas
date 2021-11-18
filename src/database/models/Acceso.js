const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    let alias = 'Acceso';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }   
    };

    let config = {
        tableName: 'accesses',
        timestamps: false
    }

    const Acceso = sequelize.define(alias, cols, config);

    return Acceso;
};