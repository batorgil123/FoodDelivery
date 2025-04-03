import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import foodRouter from "./routes/food-router.js";
import categoryRouter from "./routes/category-router.js";
import orderRouter from "./routes/foodorder-router.js";
import cors from "cors";
import locationRoutes from "./routes/location-routes.js"; 
import middleAuth from "./middleware/authMiddleware.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors()); 

const mongoString = process.env.CONNECTION_STRING;

if (!mongoString) {
  console.error("CONNECTION_STRING environment variable is not defined.");
  process.exit(1);
}
mongoose
  .connect(mongoString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

app.use("/users", userRouter);
app.use("/food", foodRouter);
app.use("/category", middleAuth, categoryRouter);
app.use("/order", middleAuth, orderRouter);
app.use("/location", middleAuth, locationRoutes);

app.get("/", (req, res) => {
  res.send("Server is running.");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
