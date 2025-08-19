import Conn from "./database.js";
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import userRoutes from "./routes/auth.routes.js";
import adminRouter from "./routes/admin.routes.js";
import songRouter from "./routes/song.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoutes, songRouter, adminRouter);


app.use(errorHandler);

app.listen(port, () => {
    console.log("Server is running on port 8000")
}); 