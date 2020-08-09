import React, { useState } from 'react';
import { post } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormGroup, Input, Button, Form } from "reactstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import Highlight from "../components/Highlight";
import configs from "../configs";

export const FileUpload = () => {
  const [state, setState] = useState({
    showResult: false,
    apiMessage: null,
    error: null,
    file: null,
    values: null,
    score: null
  });

  const apiUrl = "http://35.174.208.247:5000";
  var data=null;
  
  const { getAccessTokenSilently, getIdTokenClaims } = useAuth0();

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
    try {
      const claims = await getIdTokenClaims();
      const token = claims.__raw;
      const url = configs.API_URL;
      const formData = new FormData();
      formData.append('file',file)
      const config = {
          headers: {
            'Authorization': `Bearer ${token}`,  
            'content-type': 'multipart/form-data'
          }
      }
      const responseData = await post(url, formData, config)
      data = responseData["data"]["data"];
      console.log(data);
      setState({...state, values:data, score:responseData["data"]["score"]});
    } catch (error) {
      
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="mb-5">
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
        {state.score && (
          <div className="mt-5">
            <h4 className="muted">Your Score</h4>
            <Highlight language="json">
              {JSON.stringify(state.score, null, 2)}
            </Highlight>
          </div>
        )}
        {state.values && (
          <div className="mt-5">
            <h4 className="muted">Values</h4>
            <Highlight language="json">
              {JSON.stringify(state.values, null, 2)}
            </Highlight>
          </div>
        )}
      </div>
    </>
  );
};

export default withAuthenticationRequired(FileUpload, {
  onRedirecting: () => <Loading />,
});
