import express from 'express';
import {createfoodorder} from '../CRUD/foodordercrud/createfoodorder.js'
import {getOrder} from '../CRUD/foodordercrud/getfoodorder.js'
import deletefoodorder from '../CRUD/foodordercrud/deletefoodorder.js'
import putfoodorder from '../CRUD/foodordercrud/putfoodorder.js'
const orderRouter = express.Router();

userRouter.post('/', createfoodorder);
userRouter.get('/', getOrder);
userRouter.delete('/:id', deletefoodorder);  
userRouter.put('/:id', putfoodorder);  

export default orderRouter;
