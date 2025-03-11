import express from 'express';
import mongoose from 'mongoose';
import User from "../../models/UserSchema.js";

const router = express.Router();

router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: 'Invalid user ID' });
    } 

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.send({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Server error', error: error.message });
    }
});

export default router;