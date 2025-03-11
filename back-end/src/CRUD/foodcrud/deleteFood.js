import express from 'express';
import mongoose from 'mongoose';
import Food from "../../models/FoodSchema.js";

const router = express.Router();

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: 'Invalid food ID' });
    } 

    try {
        const food = await Food.findByIdAndDelete(id);
        if (!food) {
            return res.status(404).send({ message: 'Food not found' });
        }
        res.send({ message: 'Food deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Server error', error: error.message });
    }
});

export default router;