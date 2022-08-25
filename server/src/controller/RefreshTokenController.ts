import { Request, Response } from "express";
import RefreshTokenModel from "../model/RefreshTokenModel";

const RefreshTokenController = {
  login: async (req: Request, res: Response) => {
    const refreshToken = await req.body.refreshToken;
    RefreshTokenModel
      .refresh(refreshToken)
      .then((data: any) => {
        res.json({
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn,
        });
      })
      .catch((err: Error) => {
        console.log(err);
        res.sendStatus(400);
      });
    return res.json;
  },
};

export default RefreshTokenController;
