const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    let alias = 'Productos';
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
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: Categoria,
                key: 'id',
                deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
            }
        },
    };
    let config = {
        tableName: 'products',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    return Producto;
};