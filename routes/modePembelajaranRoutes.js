const express = require("express");
const router = express.Router();
const modePembelajaranController = require("../controllers/modePembelajaranController");

router.get("/", modePembelajaranController.getAllModePembelajaran);
router.post("/", modePembelajaranController.createModePembelajaran);

module.exports = router;
