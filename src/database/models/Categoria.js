

module.exports = (sequelize, DataTypes) => {
    let alias = 'Categoria';
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
        tableName: 'categories',
        timestamps: false
    }

    const Categoria = sequelize.define(alias, cols, config);
    
    Categoria.associate = function(models) {
        Categoria.hsMany(models.Productos, {
            as: 'productos',
            foreignKey: 'genre_id'
        })
    }
    return Categoria;
};