const Skill = require("../models/Skill");

// @desc    Get all skill groups
// @route   GET /api/skills
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ order: 1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Create a skill group
// @route   POST /api/skills
const createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: "Validation error", error: error.message });
  }
};

// @desc    Update a skill group
// @route   PUT /api/skills/:id
const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!skill) {
      return res.status(404).json({ message: "Skill group not found" });
    }
    res.json(skill);
  } catch (error) {
    res.status(400).json({ message: "Update error", error: error.message });
  }
};

// @desc    Delete a skill group
// @route   DELETE /api/skills/:id
const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: "Skill group not found" });
    }
    res.json({ message: "Skill group deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getSkills, createSkill, updateSkill, deleteSkill };
