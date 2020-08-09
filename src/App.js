import React, { Component, useContext } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import FileUpload from "./views/ExternalApi";
import history from "./utils/history";
import { Auth0Context } from "./components/Auth0Provider";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import { faGrinTongueSquint } from "@fortawesome/free-solid-svg-icons";
initFontAwesome();

const App = () => {
/*   constructor(props) {
    super(props);
    this.state = {
      auth: null,
      isLoading: false,
      isAuthenticated:false
    }
  }
 */
const { user, isLoading } = useAuth0();

/*   const componentWillMount = () => {
    this.auth = new Auth0Client({
      domain: 'aerovate.auth0.com',
      client_id: 'E3vnWzy4O0gcrM1seDpU7r2glcHE44G4',
      useRefreshTokens: true
    }); */
    console.log("displaying auth");
    console.log(user);
/*     if (window.location.search.includes('code=')) {
      this.handleRedirectCallback();
    } */
/*   } */

/*   async handleRedirectCallback() {
    this.state.isLoading = true;
    await this.auth.handleRedirectCallback();
    this.state.isloading = false;
    this.state.isAuthenticated = true;
    console.log("done");
    window.history.replaceState({}, document.title, window.location.pathname);
  } */

/*     if (auth0.error) {
      return <div>Oops... {this.auth.error.message}</div>;
    } */

  if (isLoading) {
    return <Loading />;
  };

  return (
  /*   <Router history={history}> */
      <div id="app" className="d-flex flex-column h-100">
{/*         <NavBar /> */}
        <Container className="flex-grow-1 mt-5">
{/*           <AnimatedCursor
                  innerSize={8}
                  outerSize={8}
                  color='225, 90, 90'
                  outerAlpha = {0.4}
              /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/tester" component={FileUpload} />
          </Switch>
        </Container>
        <Footer />
      </div>
/*     </Router> */
  );
}

export default App;