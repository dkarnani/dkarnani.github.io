import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios, { post } from 'axios';
import './myStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormFile from 'react-bootstrap/FormFile'
import Nav from 'react-bootstrap/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedCursor from "../../components/animatedCursor"

export class FileUpload extends React.Component {

    constructor(props) {
      super(props);
      this.state ={
        file:null,
        values:null,
        formattedArray:[]
      }
      this.onFormSubmit = this.onFormSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.fileUpload = this.fileUpload.bind(this)
    }
  
    onFormSubmit(e){
      e.preventDefault() // Stop form submit
      this.fileUpload(this.state.file).then((response)=>{
        this.setState({values: JSON.stringify(response.data).slice(1, -1)});
        this.setState({formattedArray: this.state.values.split(",")})
      })
    }
  
    onChange(e) {
      this.setState({file:e.target.files[0]})
      toast("File Uploaded!");
    }
  
    fileUpload(file){
      const url = 'http://127.0.0.1:5000/uploader';
      const formData = new FormData();
      formData.append('file',file)
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      return post(url, formData, config)
    }
  
    render() {
      return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={8}
                color='204, 255, 255'
                outerAlpha = {0.4}
            />
            <h1 className='primary'>File Upload</h1>
            <hr/>
            <Form inline onSubmit={this.onFormSubmit}>
                <Form.File 
                type="file"
                onChange={this.onChange}
                id="custom-file-translate-scss"
                label="Select a file"
                lang="en"
                custom
                data-browse="Button text"
                />
                <Button class="mdl-button mdl-js-button" variant="outline-primary" type="submit" >Upload</Button>
            </Form>  
            <br/>
            <h4>Values</h4>
            <ul>{this.state.formattedArray.map((value) => <li>{value}</li>)}</ul>
            <ToastContainer />
        </>
     )
    }
}
