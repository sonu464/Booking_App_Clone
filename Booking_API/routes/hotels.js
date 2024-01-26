import express from "express";
const router = express.Router();
import {
  createHotel,
  deleteHotel,
  getHotels,
  updateHotel,
  getHotel,
} from "../controllers/hotelsController.js";

// CREATE(post)
router.post("/", createHotel);

// UPDATE(put)
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);

export default router;
