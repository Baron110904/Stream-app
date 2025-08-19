import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/button";

export default function AdminDashboard() {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const tokenObj = JSON.parse(localStorage.getItem("token")); 
                const token = tokenObj.value;
                if (!token) {
                    setError("Aucun token trouvé, veuillez vous reconnecter");
                    setLoading(false);
                    return;
                }
                console.log("Token du localStorage :", token);
                console.log("Headers envoyés :", {
                  Authorization: `Bearer ${token}`
                });

                const res = await axios.get("/dash", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log("Réponse API :", res.data);
                console.log("Token envoyé :", token);
                setStats(res.data);
            } catch (error) {
                console.error("Erreur API :", error.response?.data || error.message);
                if (error.response) {
                    setError(error.response.data.error || "Erreur serveur");
                } else {
                    setError("Impossible de se connecter au serveur");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const handleclick = async (id) => {

        const tokenObj = JSON.parse(localStorage.getItem("token")); 
        const token = tokenObj.value;
        try {
            const response = await axios.delete(`/song/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log("Réponse de la suppression :", response.data);
            setStats((prevStats) => ({
                ...prevStats,
                lastSongs: prevStats.lastSongs.filter(song => song.id !== id)
            }));
        } catch (error) {
            console.error("Erreur lors de la suppression :", error.response?.data || error.message);
        }
    };

    if (loading) return <p className="text-center mt-10">Chargement...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    if (!stats) return <p className="text-center mt-10 text-red-500">Impossible de charger les données.</p>;

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-white bg-black text-3xl font-bold mb-6">Tableau de Bord Admin</h1>

            <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Total Musiques</h2>
                    <p className="text-3xl font-bold">{stats.totalSongs}</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Total Utilisateurs</h2>
                    <p className="text-3xl font-bold">{stats.totalUsers}</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-3">Musiques par Utilisateur</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-8">
                <p className="text-lg">
                    {stats.songsByUser} musique(s) au total par utilisateur (moyenne ou valeur unique selon vos stats).
                </p>
            </div>

            <h2 className="text-2xl font-semibold mb-3">Dernières Musiques Ajoutées</h2>
            <ul className="bg-white shadow rounded-lg p-4">
                {stats.lastSongs.map((song, idx) => (
                    <li key={idx} className="border-b py-2">
                        <span className="font-bold">{song.titre}</span> — {song.user_id}
                        <span className="text-sm text-gray-500 ml-2">
                            ({new Date(song.date).toLocaleDateString()})
                        </span><Button text="Delete" type="button" onClick={() => handleclick(song.id)}/>
                    </li>  
                ))}
            </ul>
        </div>
    );
};
