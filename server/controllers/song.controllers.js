import { addSong, getSharedSong, deleteSongById } from "../models/song.js";

export const createSong = async (req, res, next) => {
    const user_id = req.user.id;

    try {
        const { titre, categorie, format, lyrics, status, date } = req.body;

        const cover = req.files?.cover?.[0]?.path || null;
        const audio = req.files?.audio?.[0]?.path || null;
        if (!titre || !categorie || status === undefined || !date || !format || !audio) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const newSong = await addSong(user_id, titre, categorie, format, lyrics, status, cover, audio, date);
        res.status(201).json({ success:true, message: "Song added successfully" });
    } catch (error) {
        next(error);
    }
};

export const postSharedSong = async(req, res, next) => {
    try {
        const sharedSongs = await getSharedSong("true");
        res.status(200).json(sharedSongs.rows);
    } catch (error) {
        next(error);
    }
};

export const deleteSong = async (req, res, next) => {
    const { id } = req.params;
    try {
        await deleteSongById(id);
        res.status(200).json({ success: true, message: "Song deleted successfully" });
    } catch (error) {
        next(error);
    }
};