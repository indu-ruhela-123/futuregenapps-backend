import express from "express";
import { createEnquiry, getAllEnquiries } from "../controllers/enquiry.controller.js";

const router = express.Router();

router.post("/", createEnquiry); // POST /api/enquiry
router.get("/", getAllEnquiries); // GET /api/enquiry

export default router;
