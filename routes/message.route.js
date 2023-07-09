const express= require("express");
const messageController= require("../controllers/message.controller");
const verifyToken = require("../middleware/verifyToken");

const router= express.Router();

router.post("/message",verifyToken,messageController.createMessage);
router.get("/message",verifyToken,messageController.getMessage);
module.exports=router;