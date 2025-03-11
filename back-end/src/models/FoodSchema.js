import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    foodName: { type: String, unique: true },
    price: { type: Number},
    image: { type: String},
    ingredients: { type: [String]}, 
    category: {  type: mongoose.Schema.Types.ObjectId, ref: "FoodCategory" },
  },
  { timestamps: true } 
);

const Food = mongoose.models.Food || mongoose.model("Food", foodSchema);
export default Food;
