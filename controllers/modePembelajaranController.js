const ModePembelajaran = require("../models/ModePembelajaran");

exports.getAllModePembelajaran = async (req, res) => {
  try {
    const modePembelajaran = await ModePembelajaran.find().populate("kelas");
    res.json(modePembelajaran);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createModePembelajaran = async (req, res) => {
  const modePembelajaran = new ModePembelajaran({
    nama: req.body.nama,
    kelas: req.body.kelas,
  });

  try {
    const newModePembelajaran = await modePembelajaran.save();
    res.status(201).json(newModePembelajaran);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
