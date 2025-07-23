const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  // 1. Extract the token from the Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Missing or invalid Authorization header" });
  }

  const token = authHeader.split(" ")[1];

  // 2. Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    // 3. Attach user info to request object
    req.user = decoded;

    next(); // 4. Pass control to next middleware
  } catch (error) {
    console.error("JWT verification failed:", error.message); // optional: helpful for debugging
    return res.status(403).json({ error: "Token not valid" });
  }
}

module.exports = verifyToken;
