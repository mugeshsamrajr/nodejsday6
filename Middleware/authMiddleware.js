import User from "../Models/userModel.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

const authMiddleware = async (req, res, next) => {
  // const token = req.header("Authorization"); // Method 1
  const token = req.headers.authorization?.split(" ")[1]; // Method 2
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // const user = await User.findById(req.user._id);
    // if (user.role !== "admin") {
    //   return res.status(401).json({ message: "Access Denied" });
    // }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default authMiddleware;