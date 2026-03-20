const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    icon: { type: String },
    url: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

certificationSchema.index({ order: 1 });

module.exports = mongoose.model("Certification", certificationSchema);
