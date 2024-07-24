const mongoose = require("mongoose");

const KelasSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Kelas", KelasSchema);
