const express = require("express");
const router = express.Router();
const {
  getCertifications,
  createCertification,
  deleteCertification,
} = require("../controllers/certificationController");

router.get("/", getCertifications);
router.post("/", createCertification);
router.delete("/:id", deleteCertification);

module.exports = router;
