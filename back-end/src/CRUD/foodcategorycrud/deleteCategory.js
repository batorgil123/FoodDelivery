import express from 'express';
import mongoose from 'mongoose';
import FoodCategory from '../../models/FoodCategorySchema.js';

const router = express.Router();

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: 'Invalid category ID' });
    } 

    try {
        const category = await FoodCategory.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).send({ message: 'Category not found' });
        }
        res.send({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Server error', error: error.message });
    }
});

export default router;