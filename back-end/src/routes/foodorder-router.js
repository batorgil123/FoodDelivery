import express from 'express';
import {createfoodorder} from '../CRUD/foodordercrud/createfoodorder.js'
import {getOrder} from '../CRUD/foodordercrud/getfoodorder.js'
import deletefoodorder from '../CRUD/foodordercrud/deletefoodorder.js'
import putfoodorder from '../CRUD/foodordercrud/putfoodorder.js'
import {createfoodorderitem} from '../CRUD/foodordercrud/createfoodorderitem.js'
const orderRouter = express.Router();

orderRouter.post('/', createfoodorder);
orderRouter.get('/', getOrder);
orderRouter.delete('/:id', deletefoodorder);  
orderRouter.put('/:id', putfoodorder);  
orderRouter.post('/item', createfoodorderitem);

export default orderRouter;
