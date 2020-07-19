import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { RootRouter } from './router';
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./components/history";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain="aerovate.auth0.com"
    clientId="E3vnWzy4O0gcrM1seDpU7r2glcHE44G4"
    audience="https://aerovate.auth0.com/userinfo"
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <RootRouter/>
  </Auth0Provider>,
  document.getElementById('root')
);