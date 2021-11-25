
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
        product: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
               
    };
    let config = {
        tableName: 'carts',
        timestamps: false
    }

    const Carro = sequelize.define(alias, cols, config);

    Carro.associate = function(models) {
        Carro.belongsTo(models.Usuarios, {
            as: 'usuarios',
            foreignKey: 'user_id'
        })
        Carro.belongsToMany(models.Productos, {
            as: 'productos',
            through: 'cart_product',
            foreignKey:'cart_id',
            otherKey: 'product_id',
            timestamp: false
        })
    }
    return Carro;
};