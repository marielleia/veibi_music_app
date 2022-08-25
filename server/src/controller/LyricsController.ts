import { request, Request, Response } from "express";
import LyricsModel from '.././model/LyricsModel';

const LyricsController = {
  getLyrics: async (req: Request, res: Response) => {
    return LyricsModel.getLyrics(req, res);
  },
};

export default LyricsController