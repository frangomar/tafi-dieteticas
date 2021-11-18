const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    let alias = 'Usuarios';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        access_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: Acceso,
                key: 'id',
                deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
            }
        },
    };
    let config = {
        tableName: 'users',
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
};