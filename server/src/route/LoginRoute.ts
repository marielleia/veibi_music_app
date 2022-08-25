import Router from 'express';
import LoginController from '.././controller/LoginController';
import dotenv from 'dotenv';

dotenv.config()

const router = Router();

router.post('/login', LoginController.login);


export default router;