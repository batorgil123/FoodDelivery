import FoodOrder from "../../models/FoodOrderItem.js";

export const getOrder = async (req, res) => {
    try {
        const order = await FoodOrder.find();
        res.send(order);
    } catch (error) {
        res.send(error);
    }
    console.log("Order has been fetched");
}
