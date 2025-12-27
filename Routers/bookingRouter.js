import express from "express"
import authMiddleware, { adminMiddleware } from "../Middleware/authMiddleware.js";
import { bookService } from "../Controllers/bookingController.js";

const router = express.Router();

router.post("/book", authMiddleware, bookService)

export default router;