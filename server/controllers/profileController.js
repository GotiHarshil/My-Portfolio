const Profile = require("../models/Profile");

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, title, tagline, bio, location, email, phone, linkedin, github, resumeUrl, stats, details } = req.body;
    const profile = await Profile.findOneAndUpdate(
      {},
      { name, title, tagline, bio, location, email, phone, linkedin, github, resumeUrl, stats, details },
      { new: true, upsert: true, runValidators: true }
    );
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Validation error" });
  }
};

module.exports = { getProfile, updateProfile };
