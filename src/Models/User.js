const {DataTypes}= require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("user",{
        id:{
            type:DataTypes.INTEGER,
            autoIncremental: true,
            allowNull: false,
            primaryKey: true,
        },
        fullName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
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