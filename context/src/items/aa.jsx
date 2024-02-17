import { useState } from "react";
import "./aa.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const SignINpage = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [mesage, setmesag] = useState(null);
  const Usernamehandler = (e) => {
    setusername(e.target.value);
  };
  const PasswordHandlers = (e) => {
    setpassword(e.target.value);
  };

  const Route_Naviagtion = useNavigate();
  const testuser = async() => {
    const ApiUrl = "http://localhost:4980/users/login";
    const data = await axios.post(ApiUrl , {username , password}).then((respone) => {
        console.log(respone.data);
        console.log(respone.data.message);
        setmesag(respone.data.message);
        alert(mesage);
        if (respone.status == 201 || mesage === "success") {
          Route_Naviagtion("/images");
        } else {
          console.error("something error in sign in");
        }
      })
  };

  return (
    <>
      <div className="div">
        <div className="main">
          <div className="lable">
            <h1 className="detail">Fill Details</h1>
          </div>
          <div className="inputs">
            <div className="username">
              <TextField
                id="outlined-basic"
                value={username}
                label="Username"
                onChange={Usernamehandler}
              />
            </div>
            <div className="pasword">
              <TextField
                value={password}
                id="outlined-basic"
                label="Password"
                onChange={PasswordHandlers}
              />
            </div>
          </div>
          <div className="buttons">
            <div className="ede">
              <Button variant="contained" color="success" onClick={testuser}>
                Contained
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignINpage;
