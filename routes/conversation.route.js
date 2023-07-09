const express= require("express");
const chatController= require("../controllers/conversation.controller");
const verifyToken = require("../middleware/verifyToken");

const router= express.Router();

router.post("/conversation",verifyToken,chatController.createConversation);
router.get("/conversation",verifyToken,chatController.getConversation);
router.post("/conversationaluser",verifyToken,chatController.getConversationalUser);

module.exports=router;