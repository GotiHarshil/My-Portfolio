const Profile = require("../models/Profile");

// @desc    Get profile data
// @route   GET /api/profile
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Create or update profile
// @route   PUT /api/profile
const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true,
    });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: "Validation error", error: error.message });
  }
};

module.exports = { getProfile, updateProfile };
