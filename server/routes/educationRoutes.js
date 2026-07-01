const express = require("express");
const router = express.Router();
const {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/educationController");
const requireAdminKey = require("../middleware/adminAuth");

router.get("/", getEducation);
router.post("/", requireAdminKey, createEducation);
router.put("/:id", requireAdminKey, updateEducation);
router.delete("/:id", requireAdminKey, deleteEducation);

module.exports = router;
