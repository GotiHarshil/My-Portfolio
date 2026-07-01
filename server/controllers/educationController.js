const Education = require("../models/Education");

const getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ order: 1 });
    res.json(education);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const createEducation = async (req, res) => {
  try {
    const { degree, field, school, location, graduationDate, order } = req.body;
    const education = await Education.create({ degree, field, school, location, graduationDate, order });
    res.status(201).json(education);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Validation error" });
  }
};

const updateEducation = async (req, res) => {
  try {
    const { degree, field, school, location, graduationDate, order } = req.body;
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      { degree, field, school, location, graduationDate, order },
      { new: true, runValidators: true }
    );
    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }
    res.json(education);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Update error" });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }
    res.json({ message: "Education deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getEducation, createEducation, updateEducation, deleteEducation };
