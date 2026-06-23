const express = require("express");
const rateLimit = require("express-rate-limit");
const router = express.Router();
const { submitMessage, getMessages } = require("../controllers/contactController");
const requireAdminKey = require("../middleware/adminAuth");

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many messages sent. Please try again later." },
});

router.post("/", contactLimiter, submitMessage);
router.get("/", requireAdminKey, getMessages);

module.exports = router;
