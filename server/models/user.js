import Result from "pg/lib/result.js";
import Conn from "../database.js";

export const selectUserByUsername = async (username) => {
    const query = "SELECT * FROM users WHERE username = $1";
    return Conn.query(query, [username]);
};

export const createUser = async (username, adresse, hashedpassword) => {
    const query = "INSERT INTO users (username, adresse, password) VALUES ($1, $2, $3)";
    return Conn.query(query, [username, adresse, hashedpassword]);
};

export const getPassword = async (username) => {
    const query = "SELECT id, password, role FROM users WHERE username = $1";
    return Conn.query(query, [username]);
};

export const selectUserByEmail = async(adresse) => {
    const query = "SELECT * FROM users WHERE adresse = $1";
    return Conn.query(query, [adresse]);
};

export const updateUser = async (reset_token, reset_token_expire, adresse) => {
    const query = "UPDATE users SET reset_token = $1, reset_token_expire = $2 WHERE adresse = $3";
    return Conn.query(query, [reset_token, reset_token_expire, adresse]);
};

export const selectUserByToken = async (reset_token) => {
    const query = "SELECT * FROM users WHERE reset_token = $1";
    return Conn.query(query, [reset_token]);
};

export const updatePassword = async (hashedPassword, id) => {
    const query = "UPDATE users SET password = $1 WHERE id = $2";
    return Conn.query(query, [hashedPassword, id]);
};

export const getAllUsers = async () => {
    const query = "SELECT COUNT(*) FROM users WHERE role = 'user' LIMIT 20 OFFSET 0";
    return Conn.query(query);
};

export const getUserByRole = async (role) => {
    const query = "SELECT role FROM users WHERE role = $1";
    return Conn.query(query, [role]);
};