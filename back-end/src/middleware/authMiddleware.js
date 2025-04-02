import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const middleAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default middleAuth;
