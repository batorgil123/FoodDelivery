import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const midauth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decryptToken;
    if (token) {
      decryptToken = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decryptToken?.id;
    }
    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
}
export default midauth;