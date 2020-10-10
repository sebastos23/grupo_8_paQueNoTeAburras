module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        nombre: {
            type:dataTypes.STRING(45),
            allowNull:false
        },
        imagen:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        /*id_categoria:{
            type:dataTypes.STRING(45),
            allowNull:true
        }*/
    }

    let config = {
        tableName  : "categories",
        timestamps: false
    }
    const Category = sequelize.define(alias,cols,config)
        Category.associate = function(models){
            Category.hasMany(models.Products,{
                as:"productos",
                foreignKey: "id_categoria"
            })
           
            Category.belongsTo(models.Subcategories,{
                    as:"sector",
                    foreignKey: "id_subcategoria"
            })
        }
        

    return Category;
}