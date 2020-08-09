import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import configs from "./configs";

  const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  const uri = window.location.origin == "https://dkarnani.github.io" ? "https://dkarnani.github.io/aerovate/" : window.location.origin;

  return (
    <Auth0Provider
      domain = {configs.DOMAIN}
      clientId= {configs.clientID}
      redirectUri={uri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;