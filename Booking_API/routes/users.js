import express from "express";
const router = express.Router();

import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/usersController.js";

import { verifyToken } from "../utils/verifyToken.js";

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are authenticated");
  next();
});

// UPDATE(put)
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUser);

// GET ALL
router.get("/", getUsers);

export default router;
