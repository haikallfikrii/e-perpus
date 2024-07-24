const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Import routes
const kelasRoutes = require("./routes/kelasRoutes");
const modePembelajaranRoutes = require("./routes/modePembelajaranRoutes");
const mataPelajaranRoutes = require("./routes/mataPelajaranRoutes");
const babRoutes = require("./routes/babRoutes");
const subBabRoutes = require("./routes/subBabRoutes");
const materialRoutes = require("./routes/materialRoutes");

// Use routes
app.use("/api/kelas", kelasRoutes);
app.use("/api/mode-pembelajaran", modePembelajaranRoutes);
app.use("/api/mata-pelajaran", mataPelajaranRoutes);
app.use("/api/bab", babRoutes);
app.use("/api/sub-bab", subBabRoutes);
app.use("/api/material", materialRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
