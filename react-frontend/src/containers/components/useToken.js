import { useState } from "react";

export default function useToken() {
  const getTokenSession = () => {
    const tokenString = sessionStorage.getItem("token");
    if (tokenString === "undefined") {
      return null;
    }
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getTokenLocal = () => {
    const tokenString = localStorage.getItem("token");
    if (tokenString === "undefined") {
      return null;
    }
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getToken = () => {
    let localToken = getTokenLocal();
    if (localToken) {
      return localToken;
    }
    return getTokenSession();
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken, useLocal) => {
    if (useLocal) {
      localStorage.setItem("token", JSON.stringify(userToken));
    } else {
      sessionStorage.setItem("token", JSON.stringify(userToken));
    }
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
