const userJSON= require("../JsonHandler/user.json");
const infoJSON= require("../JsonHandler/information.json");

const {User}= require("../db");

const insertData= async()=>{
    userJSON.forEach(u=>{
        User.findOrCreate({
            where:{fullName: u.fullName},
            defaults:{
                id: u.id,
                image: u.image,
                profileURL: u.profileURL,
                description: u.description,

            }
        })
    })
}

module.exports={
    insertData,
}