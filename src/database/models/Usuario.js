
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
        lastname: {
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
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        access_id: {
            type:  DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Accesos, {
            as: 'accesos',
            foreignKey: 'access_id'
        })
        Usuario.hasMany(models.Carros, {
            as: 'carros',
            foreignKey:'user_id',
        })
    }
    return Usuario;
};