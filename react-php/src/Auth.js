import { Auth0Provider } from "@auth0/auth0-react";

export default class Auth {
    auth0 = new Auth0Provider.WebAuth({
        domain: "aerovate.auth0.com",
        clientID: "E3vnWzy4O0gcrM1seDpU7r2glcHE44G4",
        redirectUri: "http://localhost:3004/callback",
        audience: "https://aerovate.auth0.com/userinfo",
        responseType: "token_id_token",
        scope: "openid"
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();
    }
}