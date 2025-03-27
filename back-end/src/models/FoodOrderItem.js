import mongoose from "mongoose";
const foodOrderItemSchema = new mongoose.Schema({
  foodId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: "Food" 
  },
  quantity: { 
    type: Number, 
    required: true 
  },
});
const FoodOrderItem =
  mongoose.models.FoodOrderItem || mongoose.model("FoodOrderItem", foodOrderItemSchema);

export default FoodOrderItem;
