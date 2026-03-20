const Education = require("../models/Education");

// @desc    Get all education entries
// @route   GET /api/education
const getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ order: 1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Create an education entry
// @route   POST /api/education
const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json(education);
  } catch (error) {
    res.status(400).json({ message: "Validation error", error: error.message });
  }
};

// @desc    Update an education entry
// @route   PUT /api/education/:id
const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }
    res.json(education);
  } catch (error) {
    res.status(400).json({ message: "Update error", error: error.message });
  }
};

// @desc    Delete an education entry
// @route   DELETE /api/education/:id
const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }
    res.json({ message: "Education deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getEducation, createEducation, updateEducation, deleteEducation };
