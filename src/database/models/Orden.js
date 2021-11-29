module.exports = (sequelize, DataTypes) => {
    let alias = 'Ordenes';
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
       
        importe_total:
        {
            allowNull: false,
            type: DataTypes.DECIMAL
        },
    
        user_id:
        {
            allowNull: false,
            type: DataTypes.INTEGER
        }
               
    };

    let config = {
        tableName: 'orders',
        timestamps: false
    };

    const Orden = sequelize.define(alias, cols, config);

        Orden.associate = function(models) {
            Orden.belongsTo(models.Usuarios,{
                as: 'usuarios',
                foreignKey: 'user_id',
            });
            Orden.hasMany(models.Carros,{
                as: 'carros',
                foreignKey: 'order_id',
            });
        };
        return Orden;
    };
