const express= require("express");
const chatController= require("../controllers/conversation.controller");

const router= express.Router();

router.post("/conversation",chatController.createConversation);
router.get("/conversation",chatController.getConversation);
router.post("/conversationaluser",chatController.getConversationalUser);

module.exports=router;