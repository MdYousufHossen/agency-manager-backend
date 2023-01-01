const express= require("express");
const teamController= require("../controllers/team.controller");
const router= express.Router();

router.route("/")
    .post(teamController.createTeam)
    .get(teamController.getTeam)
    .patch(teamController.updateTeam)
    .delete(teamController.deleteTeam);


module.exports=router;