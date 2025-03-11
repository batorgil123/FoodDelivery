import mongoose from "mongoose";

const foodCategorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true, unique: true }, 
  },
  { timestamps: true }
);

const FoodCategory = mongoose.models.FoodCategory || mongoose.model("FoodCategory", foodCategorySchema);
export default FoodCategory; 
