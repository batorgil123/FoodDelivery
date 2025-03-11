import FoodCategory from "../../models/FoodCategorySchema.js";

export const getFoodCategory = async (req, res) => {
    try {
        const foodcategory = await FoodCategory.find();
        res.send(foodcategory);
    } catch (error) {
        res.send(error);
    }
    console.log("Categories fetched");
}
