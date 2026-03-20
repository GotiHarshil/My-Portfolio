const Certification = require("../models/Certification");

// @desc    Get all certifications
// @route   GET /api/certifications
const getCertifications = async (req, res) => {
  try {
    const certs = await Certification.find().sort({ order: 1 });
    res.json(certs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Create a certification
// @route   POST /api/certifications
const createCertification = async (req, res) => {
  try {
    const cert = await Certification.create(req.body);
    res.status(201).json(cert);
  } catch (error) {
    res.status(400).json({ message: "Validation error", error: error.message });
  }
};

// @desc    Delete a certification
// @route   DELETE /api/certifications/:id
const deleteCertification = async (req, res) => {
  try {
    const cert = await Certification.findByIdAndDelete(req.params.id);
    if (!cert) {
      return res.status(404).json({ message: "Certification not found" });
    }
    res.json({ message: "Certification deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getCertifications, createCertification, deleteCertification };
