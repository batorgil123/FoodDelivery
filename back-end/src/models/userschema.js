import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String,required: true },
    name: { type: String, required: true },
    address: { type: String},
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" }, 
    orderedFoods: [
      {
        foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food"},
      },
    ],
    isVerified: { type: Boolean, default: false },
    token: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
