import axios from "axios";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./AnimatedForm.css";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const Route_Navigation = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4980/users/signup"; // Make sure to use http:// or https://
      const response = await axios.post(url, formData);
      if (response.status == 201) {
        Route_Navigation('/login')
      }
      // Reset form or show a success message after submission
      setFormData({ username: "", password: "" });
    } catch (error) {
      console.error("Error In Sending Data To User", error);
    }
  };

  return (
    <>
      <div className="forms">
        <div className="wrap">
          <h1>Please Enter Your Details</h1>
          <form onSubmit={handleSubmit} className="inputss">
            {" "}
            {/* Use form onSubmit */}
            <div className="entry">
              <TextField
                id="username"
                name="username"
                placeholder="Enter Your UserName"
                value={formData.username}
                onChange={handleChange} // Use generic handleChange for both fields
              />
            </div>
            <div className="entry">
              <TextField
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="btn">
              <Button type="submit" variant="contained">
                Create
              </Button>{" "}
              {/* Button type "submit" */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
