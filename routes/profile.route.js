const express= require("express");
const profileController= require("../controllers/profile.controller");

const router= express.Router();

router.post("/profileupdate",profileController.profileUpdate);


module.exports=router;