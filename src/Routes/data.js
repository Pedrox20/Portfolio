const Router= require("express");
const router= Router();
const {Info}= require("../db");
const {getInfoData}= require("../Controllers/dataInfo");

router.get("/", async(req,res)=>{
    try{
        if(await Info.count()===0){
            const iData= await getInfoData();
            await Info.bulkCreate(iData);
        }

        const allInfo= await Info.findAll();

        return res.status(allInfo);
    }catch(error){

        return res.status(404).json({error: error.message})

    }
})

module.exports= router;