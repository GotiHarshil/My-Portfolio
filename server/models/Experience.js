const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    startDate: { type: String, required: true },
    endDate: { type: String, default: "Present" },
    points: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

experienceSchema.index({ order: 1 });

module.exports = mongoose.model("Experience", experienceSchema);
