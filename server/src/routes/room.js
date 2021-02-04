import express from "express";
import { createNewRoom } from "../controllers/room.js";

const router = express.Router();

router.post("/", (req, res) => {
  const roomId = createNewRoom();
  res.send({
    roomId: roomId,
  });
});

export default router;
