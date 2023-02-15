const Router= require("express");
const router=Router();
const {Op}= require("sequelize");
const {User}= require("../db");
const {getUsersData}= require("../Controllers/userData");


router.get("/", async(req,res)=>{
    try{
        const {name}= req.query;
        if(await User.count()===0){

            const uData= await getUsersData();
            await User.bulkCreate(uData);
        }
        
        if(name){
            const uname= await User.findAll({
                where:{name:{[Op.iLike]:`%${name}%`}},
           
            })
            if(!uname){
                return res.status(404).json({error: error.message});
            }

        }

        const allUsers= await User.findAll();


        
        return res.status(200).json(allUsers);
    }catch(error){
        return res.status(404).json({error:error.message});
    }
})


module.exports=router;