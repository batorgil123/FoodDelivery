import FoodOrder from '../../models/FoodOrder.js';
import FoodOrderItem from '../../models/FoodOrderItem.js';
import Food from '../../models/Food.js'; // Assuming you have a Food model

export const createfoodorder = async (req, res) => {
  const { foodItems, totalPrice } = req.body; // foodItems will be an array of objects containing foodId and quantity

  try {
    const foodOrderItems = [];

    // Loop through the foodItems and create a FoodOrderItem for each
    for (const item of foodItems) {
      const food = await Food.findById(item.foodId); // Find the food by its ID

      if (!food) {
        return res.status(404).json({ message: `Food with ID ${item.foodId} not found` });
      }

      const foodOrderItem = new FoodOrderItem({
        foodId: item.foodId, // Link to Food model
        quantity: item.quantity, // Quantity of the item in the order
      });

      await foodOrderItem.save(); // Save the order item to the database
      foodOrderItems.push(foodOrderItem._id); // Add the item ID to the foodOrderItems array
    }

    // Create a new food order
    const newFoodOrder = new FoodOrder({
      user: req.user._id, // Assuming you have authentication middleware to get the user
      totalPrice,
      foodOrderItems, // Array of foodOrderItem IDs
    });

    await newFoodOrder.save();
    res.status(201).json({ message: 'Order placed successfully', orderId: newFoodOrder._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error placing order' });
  }
};
