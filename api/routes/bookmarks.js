import express from "express"
import { addBookmark, getBookmarks } from "../controllers/bookmark.js";

const router = express.Router()

//TODO
router.get("/:id", getBookmarks);
router.post("/", addBookmark);


export default router