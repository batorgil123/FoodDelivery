import FoodOrderItem from '../../models/FoodOrderItem.js';

export const createfoodorderitem = async (req, res) => {
  const { foodid, Quantity } = req.body;
  if (!foodid || !Quantity) {
    return res.status(400).json({ error: 'foodid and Quantity are required' });
  }
  const foodOrderItem = new FoodOrderItem({
    foodId: foodid,
    quantity: Quantity,
  });
  try {
    await foodOrderItem.save();
    res.status(201).json({ message: 'Food order item created successfully', foodOrderItem });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create food order item' });
  }
};
    

