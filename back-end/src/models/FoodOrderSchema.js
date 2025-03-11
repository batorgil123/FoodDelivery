import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    totalPrice: { type: Number, required: true },
    foodOrderItems: [
      { type: mongoose.Schema.Types.ObjectId, ref: "FoodOrderItem" },
    ], 
    status: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "DELIVERED", "CANCELLED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

const FoodOrder =
  mongoose.models.FoodOrder || mongoose.model("FoodOrder", foodOrderSchema);
export default FoodOrder;
