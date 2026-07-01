const express = require("express");
const router = express.Router();
const {
  getCertifications,
  createCertification,
  deleteCertification,
} = require("../controllers/certificationController");
const requireAdminKey = require("../middleware/adminAuth");

router.get("/", getCertifications);
router.post("/", requireAdminKey, createCertification);
router.delete("/:id", requireAdminKey, deleteCertification);

module.exports = router;
