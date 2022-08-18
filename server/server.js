const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');


const app = express();

app.post('/login', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientID: '65907f8f732941c4b784206e99c3215e', 
    clientSecret: '93905a15f2f44552862e8d57dcf294b3' 
  })

  spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  })

  .catch(() => {
    res.sendStatus(400)
  })
})