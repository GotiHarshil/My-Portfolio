const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true },
  lastNotifiedAt: { type: Date, required: true },
});

module.exports = mongoose.model("Visit", visitSchema);
