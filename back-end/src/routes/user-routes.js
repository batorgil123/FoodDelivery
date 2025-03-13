import express from 'express';
import { createUser } from '../CRUD/usercrud/signup.js';
import { getUser } from '../CRUD/usercrud/getUser.js';
import deleteUser from '../CRUD/usercrud/deleteUser.js';
import putUser from '../CRUD/usercrud/putUser.js';
import {signin} from '../CRUD/usercrud/sign_in.js';
const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/', getUser);
userRouter.delete('/:id', deleteUser);  
userRouter.put('/:id', putUser);  
userRouter.get('/sign_in', signin);
export default userRouter;
