import express from "express";
import Food from "../../models/FoodSchema.js";

const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const { foodName, price } = req.body;
    if (!foodName || !price) {
      return res.status(400).send("All fields are required");
    }
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      { foodName, price },
      { new: true }
    );
    if (!updatedFood) {
      return res.status(404).send("Food not found");
    }
    res.send(updatedFood);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
