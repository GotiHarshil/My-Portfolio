const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    tagline: { type: String, required: true },
    bio: [{ type: String }],
    location: { type: String },
    email: { type: String },
    phone: { type: String },
    linkedin: { type: String },
    github: { type: String },
    resumeUrl: { type: String },
    stats: [
      {
        value: { type: String },
        label: { type: String },
      },
    ],
    details: [
      {
        label: { type: String },
        value: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
