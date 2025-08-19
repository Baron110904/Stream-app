import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({ error: "Accès refusé. Token manquant ou invalidé."});
    }

    const token = authHeader.split(" ")[1];
    console.log("Header reçu :", req.headers.authorization);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ error: "Token invalide."});
    }
};

export const verifyAdmin = async(req, res, next) => {
    try {
        console.log("Utilisateur dans req.user :", req.user);
        if (!req.user || req.user.role !== "admin") {
            return res.status(403).json({ error: "Accès refusé. Vous n'êtes pas autorisé à accéder à cette ressource." });
        }
        next();
    } catch (error) {
        console.error("Erreur verifyAdmin :", error);
        res.status(500).json({ error: "Erreur interne du serveur." });
    }
};