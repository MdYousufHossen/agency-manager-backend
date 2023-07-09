const express= require("express");
const teamController= require("../controllers/team.controller");
const verifyToken = require("../middleware/verifyToken");

const router= express.Router();

router.use(verifyToken)
router.route("/")
    .post(teamController.createTeam)
    .get(teamController.getTeam)
    .patch(teamController.updateTeam)
    .delete(teamController.deleteTeam);


module.exports=router;