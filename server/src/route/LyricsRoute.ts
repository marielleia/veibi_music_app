import Router from 'express';
import LyricsController from '../controller/LyricsController';

const router = Router();

router.get("/lyrics", LyricsController.getLyrics )

export default router;