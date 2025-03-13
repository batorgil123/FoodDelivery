import User from "../../models/UserSchema.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(401).json({ message: "Incorrect email or password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Incorrect email or password" });
        }
        res.status(200).json("Successfully signed in");
        console.log("User has been signed in");
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ error: error.message });
    }
};
