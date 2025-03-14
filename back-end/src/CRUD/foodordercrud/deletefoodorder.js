import express from 'express';
import mongoose from 'mongoose';
import FoodOrder from "../../models/FoodOrderSchema.js";

const router = express.Router();

router.delete('/', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: 'Invalid order ID' });
    } 

    try {
        const order = await FoodOrder.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).send({ message: 'Order not found' });
        }
        res.send({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Server error', error: error.message });
    }
});

export default router;