import { getAllSong, getLastSongs, getSongsByUser } from "../models/song.js";
import { getAllUsers } from "../models/user.js";

export const getAdminStats = async (req, res) => {
    const userId = req.user.id;
    try {
        const totalSongs = await getAllSong();
        const totalUsers = await getAllUsers();
        const lastSongs = await getLastSongs();
        const songsByUser = await getSongsByUser(userId);

        res.json({
            totalSongs: parseInt(totalSongs.rows[0].count),
            totalUsers: parseInt(totalUsers.rows[0].count),
            lastSongs: lastSongs.rows,
            songsByUser: songsByUser.rows[0].count
        });
    } catch (error) {
        console.error("Error fetching admin stats:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};