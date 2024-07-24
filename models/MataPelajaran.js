const mongoose = require("mongoose");

const MataPelajaranSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  modePembelajaran: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ModePembelajaran",
    required: true,
  },
});

module.exports = mongoose.model("MataPelajaran", MataPelajaranSchema);
