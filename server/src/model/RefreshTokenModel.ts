import SpotifyWebApi from "spotify-web-api-node";

class RefreshToken {
  async refresh(refreshToken: any) {
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken,
    });
    return spotifyApi.refreshAccessToken();
  }
}

export default new RefreshToken();
