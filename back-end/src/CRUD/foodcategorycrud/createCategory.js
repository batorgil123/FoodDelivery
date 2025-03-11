import FoodCategory from "../../models/FoodCategorySchema.js";

export const createCategory = async (req, res) => {
	try {
	  const createCategory = new FoodCategory(req.body);
	  await createCategory.save();
	  res.send(createCategory);
	  console.log("Category has been created");
	} catch (error) {
	  res.status(500).send({ error: error.message });
	  console.error("Error creating category", error);
	}
  };
  
