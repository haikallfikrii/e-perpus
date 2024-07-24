const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  tipe: {
    type: String,
    enum: ["Video", "End quiz", "Single quiz", "Summary"],
    required: true,
  },
  xp: Number,
  gold: Number,
  subBab: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubBab",
    required: true,
  },
});

module.exports = mongoose.model("Material", MaterialSchema);
