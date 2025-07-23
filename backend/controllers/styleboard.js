const prisma = require("../db");

// Create new styleboard
const createStyleboard = async (req, res) => {
  const { imageUrl } = req.body;
  const userId = req.user.id;

  try {
    const styleboard = await prisma.styleboard.create({
      data: {
        imageUrl,
        userId,
      },
    });
    res.status(201).json(styleboard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create styleboard" });
  }
};

// Upload styleboard with console logging
const uploadStyleboard = async (req, res) => {
  try {
    console.log("REQ.BODY:", req.body);
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error: "imageUrl is required" });
    }

    const newStyleboard = await prisma.styleboard.create({
      data: {
        imageUrl,
        userId: req.user.id,
      },
    });

    res.status(201).json(newStyleboard);
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Failed to upload styleboard" });
  }
};

// Get all styleboards for a user
const getStyleboards = async (req, res) => {
  try {
    const userId = req.user.id;
    const styleboards = await prisma.styleboard.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
    res.json(styleboards);
  } catch (err) {
    console.error("Error fetching styleboards:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createStyleboard,
  uploadStyleboard,
  getStyleboards,
};
