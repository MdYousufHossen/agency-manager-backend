const express= require("express");
const messageController= require("../controllers/message.controller");

const router= express.Router();

router.post("/message",messageController.createMessage);
router.get("/message",messageController.getMessage);
module.exports=router;