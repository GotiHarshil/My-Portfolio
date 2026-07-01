const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ featured: true }).sort({ order: 1 });
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const createProject = async (req, res) => {
  try {
    const { title, subtitle, stack, description, liveUrl, githubUrl, image, featured, order } = req.body;
    const project = await Project.create({ title, subtitle, stack, description, liveUrl, githubUrl, image, featured, order });
    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Validation error" });
  }
};

const updateProject = async (req, res) => {
  try {
    const { title, subtitle, stack, description, liveUrl, githubUrl, image, featured, order } = req.body;
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, stack, description, liveUrl, githubUrl, image, featured, order },
      { new: true, runValidators: true }
    );
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Update error" });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json({ message: "Project deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProjects, getFeaturedProjects, createProject, updateProject, deleteProject };
