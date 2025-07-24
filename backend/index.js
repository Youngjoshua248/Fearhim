// backend/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

// Mount your route files
const authRoutes = require("./routes/auth");
const outfitRoutes = require("./routes/outfits");
const styleboardRoutes = require("./routes/styleboardRoutes");
const profileRoutes = require("./routes/profile");

app.use("/auth", authRoutes); // 👈 frontend will hit this at http://localhost:3000/auth/login
app.use("/api/outfits", outfitRoutes);
app.use("/api/styleboards", styleboardRoutes);
app.use("/api/profile", profileRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("FEARHIM backend is running 👻");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
