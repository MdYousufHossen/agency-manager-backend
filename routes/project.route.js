const express= require("express");
const projectController= require("../controllers/project.controller");
const router= express.Router();

router.route("/")
    .post(projectController.createProject)
    .get(projectController.getProjects)
    .patch(projectController.updateProject)
    .delete(projectController.deleteProject);

module.exports=router;