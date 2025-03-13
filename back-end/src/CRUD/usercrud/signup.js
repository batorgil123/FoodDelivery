import User from "../../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const createUser = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    if (!name || !email || !password || !phoneNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

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
      phoneNumber,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    user.token = token;
    await user.save();

    res.status(201).json({
      message: "Successfully created user",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error("Error creating user:", error);
  }
};
