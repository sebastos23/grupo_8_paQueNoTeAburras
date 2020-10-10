module.exports = (sequelize,dataTypes) => {
    
    let alias = "Users";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        nombre:{
            type: dataTypes.STRING(45),
            allowNull:false
        },
        apellido:{
            type: dataTypes.STRING(45),
            allowNull:false
        },
        email:{
            type: dataTypes.STRING(45),
            allowNull:false,
            unique:true
        },
        pass:{
            type: dataTypes.STRING(100),
            allowNull:false
        },
        dni:{
            type: dataTypes.CHAR(8),
            unique:true,
            allowNull:true
        },
        avatar:{
            type: dataTypes.STRING(100)
        },
        direccion:{
            type: dataTypes.STRING(255),
            unique:true
        },
        ciudad:{
            type: dataTypes.STRING(255),
            allowNull:false,
            allowNull:true
        },
        provincia:{
            type: dataTypes.STRING(100),
            allowNull:false,
            allowNull:true
        },
        telefono:{
            type: dataTypes.INTEGER(20),
            allowNull:false
        },

        rol:{
            type: dataTypes.STRING(45),
            allowNull:false
        },
    }

    let config = {
        tableName: "users",
        timestamps:true,
        underscored:true

    }

    const User = sequelize.define(alias,cols,config);

User.associate = function(models){
User.hasOne(models.Carts,{
    as:"carts", /*nombre de fantasia de la relación de las tablas*/
    foreignKey:"id_usuario"
}),
User.hasMany(models.Payments,{
    as:"payments",
    foreignKey:"id_ordenCompra" 

})

}
    return User;
}