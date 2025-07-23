const verifyToken = require("../middleware/verifyToken");
const router = require("express").Router();

// 👇 test route
router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Access granted", userId: req.user.userId });
});

module.exports = router;
