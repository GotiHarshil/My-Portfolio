const express = require("express");
const router = express.Router();
const { getProfile, updateProfile } = require("../controllers/profileController");
const requireAdminKey = require("../middleware/adminAuth");

router.get("/", getProfile);
router.put("/", requireAdminKey, updateProfile);

module.exports = router;
