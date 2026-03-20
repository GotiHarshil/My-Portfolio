const express = require("express");
const router = express.Router();
const { submitMessage, getMessages } = require("../controllers/contactController");

router.post("/", submitMessage);
router.get("/", getMessages);

module.exports = router;
