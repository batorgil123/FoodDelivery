import FoodOrderItem from "../../models/FoodOrderItem.js";

export const createfoodorderitem = async (req, res) => {
  try {
    const {userId, foodId, quantity } = req.body;

    let existingOrder = await FoodOrderItem.findOne({ foodId });

    if (existingOrder && existingOrder.userId == userId) {
      existingOrder.quantity += quantity;
      await existingOrder.save();
      res.status(200).send({ message: "Order updated successfully",existingOrder });
      console.log("Order updated successfully");
    } else {
      const newOrder = new FoodOrderItem({userId, foodId, quantity });
      await newOrder.save();
      res.status(201).send({ message: "Order has been created",newOrder });
      console.log("Order has been created");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.error("Error creating food order", error);
  }
};
