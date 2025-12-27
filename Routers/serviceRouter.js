import express from "express";
import { adminMiddleware } from "../Middleware/authMiddleware.js"
import { createService, deleteService, getService, updateService } from "../Controllers/serviceController.js";

const router = express.Router();

router.post("/createservice",adminMiddleware, createService);
router.get("/getservice", getService);
router.put("/updateservice/:id", adminMiddleware, updateService);
router.delete("/deleteservice/:id", adminMiddleware, deleteService);

export default router;
