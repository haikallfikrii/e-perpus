const Kelas = require("../models/Kelas");

exports.getAllKelas = async (req, res) => {
  try {
    const kelas = await Kelas.find();
    res.json(kelas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createKelas = async (req, res) => {
  const kelas = new Kelas({
    nama: req.body.nama,
  });

  try {
    const newKelas = await kelas.save();
    res.status(201).json(newKelas);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
