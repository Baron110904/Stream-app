import Conn from "../database.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { selectUserByUsername,
        getPassword, 
        createUser,
        updateUser, 
        selectUserByEmail, 
        updatePassword, 
        selectUserByToken } from "../models/user.js";
import transporter from "../config/email.js";

export const Signup = async (req, res, next) => {
    const {username, adresse, password} = req.body;

    if (password.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters long"});
    }

    try {
        const existingUser = await selectUserByUsername(username);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: "Username already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await createUser(username, adresse, hashedPassword);

        res.status(201).json({ message: "Successfully registered"});

    } catch (error) {
        next(error);
    };
};

export const Login = async (req, res, next) => {
    const {username, password} = req.body;

    try {
        const result = await getPassword(username);
        if (result.rows.length === 0){
            return res.status(401).json({ error: "User not found"});
        }
        const match = await bcrypt.compare(password, result.rows[0].password);
        if (match) {
            const token = jwt.sign(
                { id: result.rows[0].id, role: result.rows[0].role },
                process.env.JWT_SECRET,
                { expiresIn: "1d"}
            );

            return res.status(200).json({ message: "Login successful", token });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (error) {
        next(error);
    }
};

export const ForgotPassword = async (req, res, next) => {
    const { adresse } = req.body;

    try {
        const user = await selectUserByEmail(adresse);
        if (user.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }

    const reset_token = crypto.randomBytes(20).toString("hex");
    const reset_token_expire = new Date(Date.now() + 3600000); 

    try {
        const updateResult = await updateUser(reset_token, reset_token_expire, adresse);

        const resetLink = `http://localhost:3000/reset-pw/${reset_token}`;

        const mailOptions = {
            from: process.env.EMAIL,
            to: adresse,
            subject: "Password Reset",
            text: `You requested a password reset. Click the link to reset your password: ${resetLink}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ error: "Failed to send email" });
            }
            console.log("Email sent: " + info.response);
        });

        return res.status(200).json({ message: "Password reset link sent to your email" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const ResetPassword = async (req, res, next) => {
    const { token } = req.params;
    const { password } = req.body;
    let user;

    try {
        user = await selectUserByToken(token);

        if (user.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }

    const hashed = await bcrypt.hash(password, 10);
    try {
        const updateResult = await updatePassword(hashed, user.rows[0].id);
        if (updateResult.rowCount === 0) {
            return res.status(400).json({ error: "Failed to update password" });
        }
        return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};