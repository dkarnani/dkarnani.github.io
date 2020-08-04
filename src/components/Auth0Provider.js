import React, { Component, createContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import App from "../App";

// create the context
export const Auth0Context = createContext();

// create a provider
export class Auth0Provider extends Component {
    state = {
        auth0Client: null,
        isLoading: true,
        isAuthenticated: false,
        user: null
    };
    config = {
        domain: 'aerovate.auth0.com',
        client_id: 'E3vnWzy4O0gcrM1seDpU7r2glcHE44G4',
        redirect_uri: window.location.origin
    };

    componentDidMount() {
        this.initializeAuth0();
    }

    // initialize the auth0 library
    initializeAuth0 = async () => {
        const auth0Client = await createAuth0Client(this.config);
        this.setState({ auth0Client });
    
        if (window.location.search.includes('code=')) {
          return this.handleRedirectCallback();
        }
    
        const isAuthenticated = await auth0Client.isAuthenticated();
        const user = isAuthenticated ? await auth0Client.getUser() : null;
        this.setState({ isLoading: false, isAuthenticated, user });
    };
    
    handleRedirectCallback = async () => {
        this.setState({ isLoading: true });

        await this.state.auth0Client.handleRedirectCallback();
        const user = await this.state.auth0Client.getUser();

        this.setState({ user, isAuthenticated: true, isLoading: false });
        window.history.replaceState({}, document.title, window.location.pathname);
    };

    render() {
        const { auth0Client, isLoading, isAuthenticated, user } = this.state;
        const { children } = this.props;

        const configObject = {
            isLoading,
            isAuthenticated,
            user,
            loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
            getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
            getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
            logout: (...p) => auth0Client.logout(...p)
        };

        return (
            <Auth0Context.Provider value={configObject}>
                <App />
            </Auth0Context.Provider>
        );
    }
}