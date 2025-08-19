import express from "express";
import { Signup, Login, ResetPassword, ForgotPassword } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/sign-in", Signup);
router.post("/log-in", Login);
router.post("/reset-pw/:token", ResetPassword);
router.post("/forgot-password", ForgotPassword);

export default router;