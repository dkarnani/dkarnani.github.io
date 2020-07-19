import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AuthenticatedRoute from './AuthenticatedRoute';

import { FileUpload } from "./containers/FileUpload";
import { NotFound } from "./containers/NotFound";
import { Leaderboard } from "./containers/Leaderboard";
import App from "./App";
import Callback from "./containers/Callback";

export class RootRouter extends Component {

    render() {

        let header = <App {...this.props}/>;

        return(
            <React.Fragment>
                <App />
                <ToastContainer />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={FileUpload} />
                        {/* <Route path="/callback" component={Callback} /> */}
                        <AuthenticatedRoute path="/leaderboard" component={Leaderboard} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );

    }

}