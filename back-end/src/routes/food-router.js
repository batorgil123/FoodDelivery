import express from "express";

import { createFood } from "../CRUD/foodcrud/createFood.js";
import { getFood } from "../CRUD/foodcrud/getFood.js";
import deleteFood from "../CRUD/foodcrud/deleteFood.js";
import putFood from "../CRUD/foodcrud/putFood.js";
const foodRouter = express.Router();

foodRouter.post("/", createFood);
foodRouter.get("/", getFood);
foodRouter.delete("/:id", deleteFood);
foodRouter.put("/:id", putFood);

export default foodRouter;
