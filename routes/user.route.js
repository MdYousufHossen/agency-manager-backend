const express= require("express");
const userController= require("../controllers/user.controller");
const verifyToken = require("../middleware/verifyToken");
const router= express.Router();

router.post("/signup",userController.signup);
router.post("/login",userController.login);
router.get("/me",verifyToken,userController.getMe);
router.get("/checkuser", userController.checkUser)
router.get("/allusers", userController.allUsers)
router.get("/finduser", userController.findUser)


module.exports=router;