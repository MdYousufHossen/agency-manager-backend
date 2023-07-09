const express= require("express");
const userController= require("../controllers/user.controller");
const verifyToken = require("../middleware/verifyToken");
const cloudinary = require("../middleware/cloudinary");
const router= express.Router();

router.post("/signup",userController.signup);
router.post("/login",userController.login);
router.get("/me",verifyToken,userController.getMe);
router.get("/checkuser",verifyToken, userController.checkUser)
router.get("/allusers",verifyToken, userController.allUsers)
router.get("/finduser",verifyToken, userController.findUser)
router.patch("/updateuser",verifyToken,cloudinary.single('image'), userController.updateUser)


module.exports=router;