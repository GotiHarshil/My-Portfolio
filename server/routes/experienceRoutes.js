const express = require("express");
const router = express.Router();
const {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController");
const requireAdminKey = require("../middleware/adminAuth");

router.get("/", getExperiences);
router.post("/", requireAdminKey, createExperience);
router.put("/:id", requireAdminKey, updateExperience);
router.delete("/:id", requireAdminKey, deleteExperience);

module.exports = router;
