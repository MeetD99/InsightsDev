import express from "express"
import { addComment, getComments } from "../controllers/comment.js";

const router = express.Router()

//TODO
router.get("/:id", getComments);
router.post("/", addComment);


export default router