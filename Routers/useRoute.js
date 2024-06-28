import express from 'express';
import { login, signUp } from '../Controllers/userController.js';

export const userRoutes=express.Router()

userRoutes.post('/signUp',signUp)
userRoutes.post('/login',login)