import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const middleAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decryptToken = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decryptToken?.id;
    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default middleAuth;
