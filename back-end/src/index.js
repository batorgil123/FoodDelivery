import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import foodRouter from "./routes/food-router.js";
import categoryRouter from "./routes/category-router.js";
import orderRouter from "./routes/foodorder-router.js";
dotenv.config();
const app = express();
const port = 5000;
app.use(express.json());

const mongoString = process.env.CONNECTION_STRING;

if (!mongoString) {
  console.error("CONNECTION_STRING environment variable is not defined.");
  process.exit(1);
}
mongoose
  .connect(mongoString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });
app.use("/users/", userRouter);
app.use("/food/", foodRouter);
app.use("/category/", categoryRouter);
app.use("/order/", orderRouter);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
