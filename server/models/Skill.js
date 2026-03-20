const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    icon: { type: String },
    items: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

skillSchema.index({ order: 1 });

module.exports = mongoose.model("Skill", skillSchema);
