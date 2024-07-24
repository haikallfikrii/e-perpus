const mongoose = require("mongoose");

const SubBabSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  bab: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bab",
    required: true,
  },
});

module.exports = mongoose.model("SubBab", SubBabSchema);
