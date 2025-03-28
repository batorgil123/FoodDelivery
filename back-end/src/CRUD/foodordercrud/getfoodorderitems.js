import FoodOrderItem from '../../models/FoodOrderItem.js';

export const getFoodOrderItems = async (req, res) => {
    try {
        const fooditems = await FoodOrderItem.find();
        res.send(fooditems);
    } catch (error) {
        res.send(error);
    }
    console.log("Food Items fetched");
}
