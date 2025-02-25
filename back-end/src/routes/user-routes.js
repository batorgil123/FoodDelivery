import express from 'express';
import {createUser} from '../users/createUser.js';
import {getUser} from '../users/getUser.js';

const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/', getUser);

export default userRouter;