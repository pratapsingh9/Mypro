import { useState } from "react";
import "./LoginPage.css";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import KeyIcon from "@mui/icons-material/Key";
import axios from 'axios';
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { useRef } from "react";

import {useDispatch , useSelector} from 'react-redux';
const LoginPageW = () => {
  const toast = useRef(null);
  const [file, setfile] = useState(null);
  const handlefileuplaod = (event) => {
    setfile(event.target.files[0])
  }
  const handle_file_upload = () => {
    const formdata = new FormData();
    formdata.append('file', file);
    try {
      
    } catch (error) {
      alert(error);
      console.error(error);
    }  
  }

  const submit = () => {
    alert('button is clicked')
  }
  return (
    <>
      <div className="wraper">
        <div className="details"></div>
        <div className="loginfroms">
          <h1>Enter Your Details</h1>
          <div className="input">
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user">
                  <PersonIcon />
                </i>
              </span>
              <InputText placeholder="Username" />
            </div>
            <div className="divend"></div>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user">
                  <KeyIcon />
                </i>
              </span>
              <InputText placeholder="Password" />
            </div>
            <div className="names">
              <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user">
                    <KeyIcon />
                  </i>
                </span>
                <InputText placeholder="Email" keyfilter="alphanum" />
              </div>
              <div className="upload">
                {/* <div className="card flex justify-content-center">
                  <Toast ref={toast}></Toast>
                  <FileUpload
                    className="fileupload"
                    mode="basic"
                    name="demo[]"
                    url="/api/upload"
                    accept="image/*"
                    maxFileSize={1000000}
                    
                    onUpload={(e)=> {
                      setfile(e.target.files[0])
                    }}
                  />
                </div> */}
              </div>
            </div>
            <div className="spanss">
              <Button label="Submit" onClick={submit} className="submits"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPageW;
