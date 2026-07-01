const Certification = require("../models/Certification");

const getCertifications = async (req, res) => {
  try {
    const certs = await Certification.find().sort({ order: 1 });
    res.json(certs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const createCertification = async (req, res) => {
  try {
    const { title, issuer, icon, url, order } = req.body;
    const cert = await Certification.create({ title, issuer, icon, url, order });
    res.status(201).json(cert);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Validation error" });
  }
};

const deleteCertification = async (req, res) => {
  try {
    const cert = await Certification.findByIdAndDelete(req.params.id);
    if (!cert) {
      return res.status(404).json({ message: "Certification not found" });
    }
    res.json({ message: "Certification deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCertifications, createCertification, deleteCertification };
