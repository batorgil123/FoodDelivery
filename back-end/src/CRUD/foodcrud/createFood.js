import Food from "../../models/FoodSchema.js";
// import User from "../../models/UserSchema.js";
export const createFood = async (req, res) => {
	try {
	  const food = new Food(req.body);
	  await food.save();
	  res.send(food);
	  console.log("Food has been created");
	} catch (error) {
	  res.status(500).send({ error: error.message });
	  console.error("Error creating food", error);
	}
  };
  
