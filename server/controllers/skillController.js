const Skill = require("../models/Skill");

const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ order: 1 });
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const createSkill = async (req, res) => {
  try {
    const { category, icon, items, order } = req.body;
    const skill = await Skill.create({ category, icon, items, order });
    res.status(201).json(skill);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Validation error" });
  }
};

const updateSkill = async (req, res) => {
  try {
    const { category, icon, items, order } = req.body;
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      { category, icon, items, order },
      { new: true, runValidators: true }
    );
    if (!skill) {
      return res.status(404).json({ message: "Skill group not found" });
    }
    res.json(skill);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Update error" });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: "Skill group not found" });
    }
    res.json({ message: "Skill group deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getSkills, createSkill, updateSkill, deleteSkill };
