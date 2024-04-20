import express from "express"
import { addLike, getLikes } from "../controllers/like.js";

const router = express.Router()

//TODO
router.get("/:id", getLikes);
router.post("/", addLike);


export default router