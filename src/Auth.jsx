import React, { useEffect, useState } from "react";
import App from "./App.jsx";
import "./index.css";
import SignIn from "./components/SignIn.jsx";

const Auth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    sessionStorage.getItem("token") ? setToken(token) : setToken(null);
  }, []);

  return token ? <App setToken={setToken} /> : <SignIn setToken={setToken} />;
};

export default Auth;
