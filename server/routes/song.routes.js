import express from "express";
import { createSong, postSharedSong, deleteSong } from "../controllers/song.controllers.js";
import { verifyToken } from "../middleware/verifyToken.js";
import upload from "../middleware/upload.js";

const songRouter = express.Router();

songRouter.post("/add-song", verifyToken, upload.fields([
    { name: "cover", maxCount: 1 },
    { name: "audio", maxCount: 1 }
    ]), 
    createSong
);
songRouter.get("/song", postSharedSong);
songRouter.delete("/song/:id", verifyToken, deleteSong);

export default songRouter;