const express= require("express");
const projectController= require("../controllers/project.controller");
const router= express.Router();

router.route("/")
    .post(projectController.createProject)
    .get(projectController.getProjects)
    .patch(projectController.updateProject);


module.exports=router;