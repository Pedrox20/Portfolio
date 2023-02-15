const {Info}= require("../db");

const getInfoData=async()=>{
  const infoDB= await Info.findAll();

  const information= await infoDB.map(i=>{
    return{
      id:i.id,
      profileURL: i.profileURL,
      description: i.description,
    }
  })
  return information;
}
module.exports={getInfoData};