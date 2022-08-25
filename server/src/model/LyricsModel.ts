import lyricsFinder from 'lyrics-finder';
import { Request, Response } from 'express';

class Lyrics {
  async getLyrics(req: Request, res: Response) {
    const lyrics =
      (await lyricsFinder (req.query.artist, req.query.track)) ||
      "No Lyrics Found";
    res.json({ lyrics });
    console.log(res.json);
    return res.json;
  }
}

export default new Lyrics();