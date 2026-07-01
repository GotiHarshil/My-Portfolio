const express = require("express");
const router = express.Router();
const {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");
const requireAdminKey = require("../middleware/adminAuth");

router.get("/", getSkills);
router.post("/", requireAdminKey, createSkill);
router.put("/:id", requireAdminKey, updateSkill);
router.delete("/:id", requireAdminKey, deleteSkill);

module.exports = router;
