import express from 'express';
import FoodOrder from "../../models/FoodOrderSchema.js";

const router = express.Router();


router.put('/', async (req, res) => {
    try {
        const { quantity,foodID } = req.body;
        if (!quantity || !foodID) {
            return res.status(400).send('All fields are required');
        }
        const updatedOrder = await FoodOrder.findByIdAndUpdate(req.params.id, { quantity,foodID }, { new: true });
        if (!updatedOrder) {
            return res.status(404).send('Order not found');
        }
        res.send(updatedOrder);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

export default router;