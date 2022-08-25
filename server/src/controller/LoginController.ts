import { Request, Response } from "express";
import loginModel from ".././model/LoginModel";

const LoginController = {
  login: async (req: Request, res: Response) => {
    const code = await req.body.code;
    loginModel
      .login(code)
      .then((data: any) => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch(() => {
        res.sendStatus(400);
      });
  },
};

export default LoginController;
