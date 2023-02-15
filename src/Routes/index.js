const { Router } = require('express');
const router = Router();
//
const users= require("./users");
const data= require("./data");
//
router.use("/users",users);
router.use("/info", data);


module.exports= router;