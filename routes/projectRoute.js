const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.route("/").get(projectController.getAllProjects);

router.route("/:projectid").get(projectController.getProject);

module.exports = router;
