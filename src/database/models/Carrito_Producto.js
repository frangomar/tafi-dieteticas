const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    let alias = 'Carrito_Producto';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: Producto,
                key: 'id',
                deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: Usuario,
                key: 'id',
                deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
            }
        }   
    };

    let config = {
        tableName: 'categories',
        timestamps: false
    }

    const Carrito_Producto = sequelize.define(alias, cols, config);

    return Carrito_Producto;
};