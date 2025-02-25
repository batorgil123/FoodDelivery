import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
dotenv.config();
const app = express();
const port = 3000;
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
app.use("/", userRouter);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
