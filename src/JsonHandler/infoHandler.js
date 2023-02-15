const infoJSON= require("../JsonHandler/information.json");

const {Info}= require("../db");


const infoData=async()=>{
    infoJSON.forEach(i=>{
        Info.findOrCreate({
            where:{description: i.description},
            defaults:{
                id:i.id,
             profileURL: i.profileURL,
            }
        })
    })
}

module.exports={infoData};