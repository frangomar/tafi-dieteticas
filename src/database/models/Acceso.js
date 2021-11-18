
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
    
    Acceso.associate = function(models) {
        Acceso.hsMany(models.Usuarios, {
            as: 'usuarios',
            foreignKey: 'access_id'
        })
    }
    return Acceso;
};