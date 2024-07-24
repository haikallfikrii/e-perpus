const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const kelasController = require("../controllers/kelasController");

router.get("/", kelasController.getAllKelas);

router.post(
  "/",
  body("nama").notEmpty().withMessage("Nama kelas tidak boleh kosong"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  kelasController.createKelas
);

module.exports = router;
