const express= require("express");
const projectController= require("../controllers/project.controller");
const verifyToken = require("../middleware/verifyToken");

const router= express.Router();

router.use(verifyToken)

router.route("/")
    .post(projectController.createProject)
    .get(projectController.getProjects)
    .patch(projectController.updateProject)
    .delete(projectController.deleteProject);

module.exports=router;