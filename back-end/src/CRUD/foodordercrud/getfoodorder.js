import FoodOrder from '../../models/FoodOrderSchema.js';
export const getOrder = async (_, res) => {
  try {
    const orders = await FoodOrder.find()
      .populate({
        path: 'foodOrderItems',
        populate: {
          path: 'foodId',
          model: 'Food',
        },
      })
      .exec();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
};
