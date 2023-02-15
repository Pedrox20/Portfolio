const {DataTypes}= require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("info",{
        id:{
            type: DataTypes.INTEGER,
            autoIncremental:true,
            allowNull: false,
            primaryKey:true,
        },
        profileURL:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING(10000),
            allowNull: false,
        },
    },{
        timestamps: false
    })
}