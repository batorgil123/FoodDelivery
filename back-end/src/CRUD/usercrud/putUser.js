import express from 'express';
import User from "../../models/UserSchema.js";

const router = express.Router();


router.put('/users/:id', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send('All fields are required');
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, email, password }, { new: true });
        if (!updatedUser) {
            return res.status(404).send('User not found');
        }
        res.send(updatedUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

export default router;