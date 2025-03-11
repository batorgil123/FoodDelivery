import express from "express";
import { getFoodCategory } from "../CRUD/foodcategorycrud/getCategory.js";
import { createCategory } from "../CRUD/foodcategorycrud/createCategory.js";
import putCategory from "../CRUD/foodcategorycrud/putCategory.js";
import deleteCategory from "../CRUD/foodcategorycrud/deleteCategory.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getFoodCategory);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:id", putCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
