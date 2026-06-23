const express = require("express");
const router = express.Router();
const { submitMessage, getMessages } = require("../controllers/contactController");
const requireAdminKey = require("../middleware/adminAuth");

router.post("/", submitMessage);
router.get("/", requireAdminKey, getMessages);

module.exports = router;
