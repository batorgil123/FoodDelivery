import express from 'express';
import { createUser } from '../CRUD/usercrud/createUser.js';
import { getUser } from '../CRUD/usercrud/getUser.js';
import deleteUser from '../CRUD/usercrud/deleteUser.js';
import putUser from '../CRUD/usercrud/putUser.js';

const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/', getUser);
userRouter.delete('/:id', deleteUser);  
userRouter.put('/:id', putUser);  

export default userRouter;
