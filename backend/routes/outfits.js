const express = require("express");
const router = express.Router();
//const { PrismaClient } = require("@prisma/client");
//const prisma = new PrismaClient();
const verifyToken = require("../middleware/verifyToken");

router.post("/", verifyToken, async (req, res) => {
  try {
    const { outfit, styleboardId, userId } = req.body;

    const saved = await prisma.outfit.create({
      data: {
        top: outfit.top,
        bottom: outfit.bottom,
        shoes: outfit.shoes,
        accessory: outfit.accessory,
        user: { connect: { id: userId } },
        styleboard: { connect: { id: styleboardId } },
      },
    });

    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save outfit." });
  }
});

module.exports = router;
