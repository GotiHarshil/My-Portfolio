const express = require("express");
const router = express.Router();
const {
  getProjects,
  getFeaturedProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const requireAdminKey = require("../middleware/adminAuth");

router.get("/", getProjects);
router.get("/featured", getFeaturedProjects);
router.post("/", requireAdminKey, createProject);
router.put("/:id", requireAdminKey, updateProject);
router.delete("/:id", requireAdminKey, deleteProject);

module.exports = router;
