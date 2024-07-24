const mongoose = require("mongoose");

const BabSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  mataPelajaran: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MataPelajaran",
    required: true,
  },
});

module.exports = mongoose.model("Bab", BabSchema);
