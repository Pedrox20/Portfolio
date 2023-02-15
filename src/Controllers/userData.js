const {User}= require("../db");

const getUsersData= async ()=>{
  const userDB= await User.findAll();

    const usersData= await userDB.map(user=>{
        return{
            id: user.id,
            fullName: user.fullName,
            image: user.image,
        }
    })
    return usersData;
}

module.exports= {getUsersData};