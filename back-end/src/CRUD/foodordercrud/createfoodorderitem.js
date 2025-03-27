import FoodOrderItem from '../../models/FoodOrderItem.js';
export const createfoodorderitem = async (req, res) => {
	try {
	  const foodorderitem = new FoodOrderItem(req.body);
	  await foodorderitem.save();
	  res.send(foodorderitem);
	  console.log("Food has been created");
	} catch (error) {
	  res.status(500).send({ error: error.message });
	  console.error("Error creating food", error);
	}
  };
  
