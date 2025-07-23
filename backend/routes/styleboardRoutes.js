// // //pt1
// const express = require("express");
// const router = express.Router();
// const { PrismaClient } = require("@prisma/client");
// const verifyToken = require("../middleware/verifyToken");

// const prisma = new PrismaClient();

// router.get("/", verifyToken, async (req, res) => {
//   try {
//     const userId = req.user.id; // 👈 Middleware should attach user info here

//     const styleboards = await prisma.styleboard.findMany({
//       where: { userId },
//       orderBy: { createdAt: "desc" },
//     });

//     res.json(styleboards);
//   } catch (err) {
//     console.error("Styleboard fetch error:", err);
//     res.status(500).json({ error: "Failed to fetch styleboards" });
//   }
// });

// router.post("/", verifyToken, async (req, res) => {
//   const { imageUrl } = req.body;

//   if (!imageUrl) {
//     return res.status(400).json({ error: "imageUrl is required" });
//   }

//   try {
//     const newStyleboard = await prisma.styleboard.create({
//       data: {
//         imageUrl,
//         userId: req.user.id, // 👈 pulled from token
//       },
//     });

//     res.status(201).json(newStyleboard);
//   } catch (err) {
//     console.error("❌ Upload error:", err);
//     res.status(500).json({ error: "Failed to upload styleboard" });
//   }
// });

// module.exports = router;

//pt2
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

// GET /api/styleboards
router.get("/", verifyToken, async (req, res) => {
  try {
    const boards = await prisma.styleboard.findMany({
      where: { userId: req.user.id },
    });
    res.json(boards);
  } catch (err) {
    console.error("Failed to fetch styleboards:", err);
    res.status(500).json({ error: "Failed to fetch styleboards." });
  }
});

module.exports = router;
