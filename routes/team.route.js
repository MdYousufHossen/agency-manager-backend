const express= require("express");
const teamController= require("../controllers/team.controller");
const router= express.Router();

router.route("/")
    .post(teamController.createTeam)
    .get(teamController.getTeam);


module.exports=router;