export const errorHandler = (err, req, res, next) => {
    console.error("Server error:", err);
    res.status(500).json({ error: "Server error"});
};