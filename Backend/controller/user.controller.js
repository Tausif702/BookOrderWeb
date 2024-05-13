import { decrypt } from "dotenv";
import User from "../model/user.model.js";
import bcrypt from'bcryptjs'

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "This Email already exists" });
        } else {
            const hashPassword = await bcrypt.hash(password, 10);
            const createdUser = new User({
                fullname: fullname,
                email: email,
                password: hashPassword
            });
            await createdUser.save();
            return res.status(201).json({
                message: "User registered successfully",
                user: {
                    _id: createdUser._id,
                    fullname: createdUser.fullname,
                    email: createdUser.email
                }
            });
        }
    } catch (error) {
        console.log("Error msg: ", error);
        return res.status(500).json({
            message: "Failed to register user"
        });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatchPass = await bcrypt.compare(password, user.password);

        if (!isMatchPass) {
            return res.status(400).json({ message: "Invalid password" });
        }

        return res.status(200).json({
            message: "Login successful",
            user: {
                fullname: user.fullname,
                email: user.email,
                _id: user._id
            }
        });
    } catch (error) {
        console.log("Error Msg:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};