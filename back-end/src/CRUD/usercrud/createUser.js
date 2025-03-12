import User from "../../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const createUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = new User({
			name,
			email,
			password: hashedPassword,
		});
		await user.save();
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});
		res.status(201).json("Successfully created user");
	} catch (error) {
		res.status(500).json({ error: error.message });
		console.error("Error creating user:", error);
	}
};
