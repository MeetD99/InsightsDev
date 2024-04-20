import express from "express"
import { getUserPosts, updatePhoto } from "../controllers/user.js";

const router = express.Router()

//TODO
router.get("/:uid", getUserPosts);
router.put("/", updatePhoto);

export default router