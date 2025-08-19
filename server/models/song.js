import Conn from "../database.js";

export const addSong = async (user_id, titre, categorie, format, lyrics, status, cover, audio, date) => {
    const query = "INSERT INTO songs (user_id, titre, categorie, format, lyrics, status, cover, audio, date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";   
    return Conn.query(query, [user_id, titre, categorie, format, lyrics, status, cover, audio, date]);   
};

export const getSongByTilte = async (titre) => {
    const query = "SELECT * FROM songs WHERE titre = $1";
    return Conn.query(query, [titre]);
};

export const getSongsByCategorie = async (categorie) => {
    const query = "SELECT * FROM songs WHERE categorie = $1";
    return Conn.query(query, [categorie]);
};

export const getSongsByFormat = async (format) =>{
    const query = "SELECT * FROM songs WHERE format = $1";
    return Conn.query(query, [format]);
};

export const getSharedSong = async (status) => {
    const query = "SELECT * FROM songs WHERE status = $1";
    return Conn.query(query, [status]);
};

export const getAllSong = async () => {
    const query = "SELECT COUNT(*) FROM songs LIMIT 20 OFFSET 0";
    return Conn.query(query);
};

export const getSongsByUser = async (user_id) => {
    const query = "SELECT COUNT(*) FROM songs WHERE user_id = $1";
    return Conn.query(query, [user_id]);
};

export const getLastSongs = async () => {
    const query = "SELECT * FROM songs ORDER BY date DESC LIMIT 5";
    return Conn.query(query);
};

export const deleteSongById = async (id) => {
    const query = "DELETE FROM songs WHERE id = $1";
    return Conn.query(query, [id]);
};