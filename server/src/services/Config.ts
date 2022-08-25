import { config as dotenvConfig } from "dotenv";

dotenvConfig();
export const config = ():any => {
  const redirectUri = process.env.REDIRECT_URI as string;
  return redirectUri;

  };
