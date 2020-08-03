import React, { useState } from 'react';
import axios, { post } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormGroup, Input, Button, Alert, Form } from "reactstrap";
import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import config from "../auth_config.json";
import Loading from "../components/Loading";
import configs from "../configs";

const { apiOrigin = "http://localhost:3001" } = config;

export const FileUpload = () => {
  const [state, setState] = useState({
    showResult: false,
    apiMessage: null,
    error: null,
    file: null,
    values: null,
    formattedArray: []
  });

  var data=null;
  
  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
  } = useAuth0();

  const handleConsent = async () => {
    try {
      //await getAccessTokenWithPopup();
      await getAccessTokenSilently();
      setState({
        ...state,
        error: null,
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }

    await callApi();
  };

  const handleLoginAgain = async () => {
    try { 
      // await loginWithPopup();
      setState({
        ...state,
        error: null,
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }

    await callApi();
  };

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(`${apiOrigin}/api/external`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      setState({
        ...state,
        showResult: true,
        apiMessage: responseData,
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }
  };

  const handle = (e, fn) => {
    e.preventDefault();
    fn();
  };

  const onFormSubmit = async() => {
    //e.preventDefault() // Stop form submit
    const response = fileUpload(state.file);
    toast("File submitted!");
  };

  const onChange = (e) => {
    setState({...state, file:e.target.files[0]})
    toast("File Uploaded!");
  };

  const fileUpload = async(file) => {
    const url = configs.API_URL;
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    const responseData = await post(url, formData, config)
    data = responseData
    console.log(data);
    data=JSON.stringify(data["data"]).slice(1, -1);
    console.log(data);
    data =data.split(",");
    console.log(data);
    setState({...state, formattedArray:data});
  };

  return (
    <>
      <ToastContainer />
      <div className="mb-5">
        {state.error === "consent_required" && (
          <Alert color="warning">
            You need to{" "}
            <a
              href="#/"
              class="alert-link"
              onClick={(e) => handle(e, handleConsent)}
            >
              consent to get access to users api
            </a>
          </Alert>
        )}

        {state.error === "login_required" && (
          <Alert color="warning">
            You need to{" "}
            <a
              href="#/"
              class="alert-link"
              onClick={(e) => handle(e, handleLoginAgain)}
            >
              log in again
            </a>
          </Alert>
        )}

        <h1 className='primary'>File Upload</h1>
        <hr/>
        <Form inline>
          <FormGroup>
            <Input 
            type="file"
            onChange={(e) => onChange(e)}
            id="custom-file-translate-scss" 
            label="Select a file"
            lang="en"
            data-browse="Button text"
            />
            <Button onClick={(e) => onFormSubmit(e)} className="mdl-button mdl-js-button" variant="outline-primary">Upload</Button>
          </FormGroup>
        </Form>  
        <br/>
        <h4>Values</h4>
        <ul>{state.formattedArray.map((value) => <li>{value}</li>)}</ul>
      </div>
    </>
  );
};

export default withAuthenticationRequired(FileUpload, {
  onRedirecting: () => <Loading />,
});
