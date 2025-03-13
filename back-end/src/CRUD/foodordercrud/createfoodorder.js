import FoodOrder from "../../models/FoodOrderSchema.js";

export const createfoodorder = async (req, res) => {
	try {
	  const order = new FoodOrder(req.body);
	  await order.save();
	  res.send(order);
	  console.log("Order has been created");
	} catch (error) {
	  res.status(500).send({ error: error.message });
	  console.error("Error creating food order:", error);
	}
  };
  
