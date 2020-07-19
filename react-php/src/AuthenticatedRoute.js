import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { FileUpload } from "./containers/FileUpload";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthenticatedRoute = ({ component : Component, path, ...rest}) => {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated === true ? <Component {...rest} /> : <FileUpload />;
};

export default AuthenticatedRoute;