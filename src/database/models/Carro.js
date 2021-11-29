
module.exports = (sequelize, DataTypes) => {
    let alias = 'Carros';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subtotal: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_id: {
            allowNull: true,
            type: DataTypes.INTEGER
        }
               
    };
    let config = {
        tableName: 'carts',
        timestamps: false
    }

    const Carro = sequelize.define(alias, cols, config);

    Carro.associate = function(models){
        Carro.belongsTo(models.Productos,{
            as: 'productos',
            foreignKey: 'product_id',
        });
        Carro.belongsTo(models.Usuarios,{
            as: 'usuarios',
            foreignKey: 'user_id',
        });
        Carro.belongsTo(models.Ordenes,{
            as: 'ordenes',
            foreignKey: 'order_id',
        })
    }
    return Carro;
};