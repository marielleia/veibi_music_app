import SpotifyWebApi from "spotify-web-api-node";

class Login {
  async login(code: any){
    const spotifyApi = await new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
});
  
return spotifyApi.authorizationCodeGrant(code);
  }
}

export default new Login();