import express from "express"

import { loginUser, registerUser } from "../Controllers/authController.js"
import authMiddleware from "../Middleware/authMiddleware.js";


const router = express.Router();

router.post("/register", authMiddleware, registerUser);
router.post("/login",authMiddleware, loginUser);

export default router;
