import express from 'express';
import { AddUser, CheckUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/add', AddUser);
userRouter.post('/login', CheckUser);

export default userRouter;