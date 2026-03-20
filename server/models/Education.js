const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    degree: { type: String, required: true },
    field: { type: String, required: true },
    school: { type: String, required: true },
    location: { type: String },
    graduationDate: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

educationSchema.index({ order: 1 });

module.exports = mongoose.model("Education", educationSchema);
