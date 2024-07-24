const mongoose = require("mongoose");

const ModePembelajaranSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  kelas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Kelas",
    required: true,
  },
});

module.exports = mongoose.model("ModePembelajaran", ModePembelajaranSchema);
