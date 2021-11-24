

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
            allowNull: false,
        }
        
    };
    let config = {
        tableName: 'products',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Categorias, {
            as: 'categorias',
            foreignKey: 'category_id'
        })
        Producto.belongsToMany(models.Usuarios, {
            as: 'usuarios',
            through: 'carrito_producto',
            foreignKey:'product_id',
            otherKey: 'user_id',
            timestamp: false
        })
    }

   
        
    
    return Producto;
};