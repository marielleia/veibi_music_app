// import { lyricsFinder } from 'lyrics-finder';
const lyricsFinder = require("lyrics-finder")

import { Request, Response } from 'express';

class Lyrics {
  async getLyrics(req: Request, res: Response) {
    const lyrics =
      (await lyricsFinder(req.query.artist, req.query.track)) ||
      "No Lyrics Found";
    return res.json({ lyrics });
  }
}

export default new Lyrics();