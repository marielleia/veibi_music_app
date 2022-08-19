import { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
<<<<<<< HEAD
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch(() => {
        //window.location = "/";
      });
=======
    .post("http://localhost:3001/login", {
      code,
    })
    .then((res) => {
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
      setExpiresIn(res.data.expiresIn);
      window.history.pushState({}, null, "/");
    })
    .catch(() => {
      window.location = "/";
    });
>>>>>>> a42ca93926ddf5c2fc39f554869676bd6a3e8b02
  }, [code]);

  useEffect(() => {
  if (!refreshToken || !expiresIn) return
  const interval = setInterval (()=>{
    axios
      .post("http://localhost:3001/refresh", {
        refreshToken,
      })
      .then((res) => {
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
      })
      .catch(() => {
<<<<<<< HEAD
        //window.location = "/";
      });
  }, [refreshToken, expiresIn])
=======
        window.location = "/";
      })
    }, (expiresIn - 60) * 1000)
>>>>>>> a42ca93926ddf5c2fc39f554869676bd6a3e8b02

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken;
}