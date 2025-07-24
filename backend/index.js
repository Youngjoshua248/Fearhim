// backend/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

// Import and use logger middleware
const logger = require("./middleware/logger");
app.use(logger);

// Mount your route files
const authRoutes = require("./routes/auth");
const outfitRoutes = require("./routes/outfits");
const styleboardRoutes = require("./routes/styleboardRoutes");
const profileRoutes = require("./routes/profile");

app.use("/auth", authRoutes); // 👈 frontend will hit this at http://localhost:3000/auth/login
app.use("/api/outfits", outfitRoutes);
app.use("/api/styleboards", styleboardRoutes);
app.use("/api/profile", profileRoutes);

// Serve static files from the public directory (frontend build)
app.use(express.static(path.join(__dirname, "public")));

// API test route (only for API testing)
app.get("/api/test", (req, res) => {
  res.send("FEARHIM backend is running 👻");
});

// Serve uploaded files (if any)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Note: SPA routing will be handled by serving index.html for the root route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
