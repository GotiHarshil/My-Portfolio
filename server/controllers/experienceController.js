const Experience = require("../models/Experience");

const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ order: 1 });
    res.json(experiences);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const createExperience = async (req, res) => {
  try {
    const { role, company, location, startDate, endDate, points, order } = req.body;
    const experience = await Experience.create({ role, company, location, startDate, endDate, points, order });
    res.status(201).json(experience);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Validation error" });
  }
};

const updateExperience = async (req, res) => {
  try {
    const { role, company, location, startDate, endDate, points, order } = req.body;
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      { role, company, location, startDate, endDate, points, order },
      { new: true, runValidators: true }
    );
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.json(experience);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Update error" });
  }
};

const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.json({ message: "Experience deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getExperiences, createExperience, updateExperience, deleteExperience };
