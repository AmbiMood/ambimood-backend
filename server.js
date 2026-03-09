require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

const authRoutes = require("./routes/authuRoutes");
const musicRoutes = require("./routes/musicRoutes");

app.use("/api", authRoutes);
app.use("/api/music", musicRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.json({ message: "AMBI MOOD Backend Running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
