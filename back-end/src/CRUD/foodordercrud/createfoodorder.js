import FoodOrder from '../../models/FoodOrderSchema.js';
import FoodOrderItem from '../../models/FoodOrderItem.js';
import Food from '../../models/FoodSchema.js';
export const createfoodorder = async (req, res) => {
  const { foodItems, totalPrice } = req.body;
  if (!foodItems || !Array.isArray(foodItems) || foodItems.length === 0) {
    return res.status(400).json({ message: 'Invalid or missing foodItems' });
  }
  if (!totalPrice || typeof totalPrice !== 'number') {
    return res.status(400).json({ message: 'Invalid or missing totalPrice' });
  }
  if (!req.user || !req.user._id) {
    return res.status(401).json({ message: 'Unauthorized: User information is missing' });
  }

  try {
    const foodOrderItems = [];

    await Promise.all(
      foodItems.map(async (item) => {
        if (!item.quantity || typeof item.quantity !== 'number' || item.quantity <= 0) {
          throw new Error(`Invalid quantity for food item with ID ${item.foodId}`);
        }

        const food = await Food.findById(item.foodId);

        if (!food) {
          throw new Error(`Food with ID ${item.foodId} not found`);
        }

        const foodOrderItem = new FoodOrderItem({
          foodId: item.foodId,
          quantity: item.quantity,
        });

        await foodOrderItem.save();
        foodOrderItems.push(foodOrderItem._id);
      })
    );
    const newFoodOrder = new FoodOrder({
      user: req.user._id,
      totalPrice,
      foodOrderItems,
    });
    await newFoodOrder.save();
    res.status(201).json({ message: 'Order placed successfully', orderId: newFoodOrder._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error placing order' });
  }
};
