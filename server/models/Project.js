const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    stack: [{ type: String }],
    description: [{ type: String }],
    liveUrl: { type: String },
    githubUrl: { type: String },
    image: { type: String },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

projectSchema.index({ order: 1 });

module.exports = mongoose.model("Project", projectSchema);
