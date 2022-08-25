import express from 'express';
import LoginRoute from '.././src/route/LoginRoute';
import RefreshTokenRoute from '.././src/route/RefreshTokenRoute';
import LyricsRoute from '.././src/route/LyricsRoute';
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config()

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(LoginRoute);
app.use(RefreshTokenRoute);
app.use(LyricsRoute);

export default app;