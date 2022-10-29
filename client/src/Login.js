import React from "react";
import { Container } from "react-bootstrap";
import pineapple from "./images/pineapple.png";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=65907f8f732941c4b784206e99c3215e&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <>
      <Container className="view">
        <div className="veibi-container">
          <img
            className="veibi-logo"
            src={pineapple}
            alt="pineapple"
            style={{ height: "15vh" }}
          ></img>
          <h1 className="text-cutout">VEIBI</h1>
          <h3>Your new favorite music app</h3>
        </div>
        <a className="btn" href={AUTH_URL}>
          Log In
        </a>
      </Container>
    </>
  );
}
