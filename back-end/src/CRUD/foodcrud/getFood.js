import Food from "../../models/FoodSchema.js";

export const getFood = async (req, res) => {
    try {
        const food = await Food.find();
        res.send(food);
    } catch (error) {
        res.send(error);
    }
    console.log("Foods has been fetched");
}
