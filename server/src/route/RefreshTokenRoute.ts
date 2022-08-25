import Router from 'express';
import RefreshTokenController from '.././controller/RefreshTokenController';
/* import dotenv from 'dotenv';

dotenv.config() */


const router = Router();

router.post('/refresh', RefreshTokenController.login);


export default router;