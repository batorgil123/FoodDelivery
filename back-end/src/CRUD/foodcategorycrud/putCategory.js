import express from "express";
import FoodCategory from "../../models/FoodCategorySchema.js";

const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const { categoryName} = req.body;
    if (!categoryName) {
      return res.status(400).send("All fields are required");
    }
    const updatedCategory = await FoodCategory.findByIdAndUpdate(
      req.params.id,
      {categoryName},
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).send("Category not found");
    }
    res.send(updatedCategory);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
