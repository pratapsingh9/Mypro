import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "./addimages.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Button } from "primereact/button";
import { useEffect } from "react";
import axios from "axios";
export default function Addimg33() {
  const [value, setValue] = useState("");
  const [link, setlink] = useState(" ");
  const divStyle = {
    color: "blue",
    backgroundColor: "lightgray", // Notice the camelCase
    padding: "10px",
    border: "1px solid black",
    marginTop: "5px", // Numeric values are treated as `px`
  };
  const Add = async () => {
    try {
      const name = value;
      const url = link;
      console.log(`name ${name} and url is ${url}`);
      const res = await axios
        .post("http://localhost:4980/addimg", { name: name, url: url })
        .then((res) => console.log(res));
        console.log(res);
        setValue("");
        setlink("")
    } catch (error) {
      console.log(`error in ad images`);
    }
  };

  return (
    <>
      <div className="wraapping">
        <div className="boxx">
          <div className="card flex justify-content-center">
            <span className="p-float-label">
              <InputText
                id="username"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                tooltip="Enter Img Name"
              />
              <label htmlFor="username">Name</label>
            </span>
          </div>
          <div className="inputts">
            <div className="card flex justify-content-center">
              <span className="p-float-label">
                <InputText
                  id="username"
                  value={link}
                  onChange={(e) => setlink(e.target.value)}
                  tooltip="Enter Image Link"
                />
                <label htmlFor="username">Link</label>
              </span>
            </div>
          </div>
          <div className="card flex justify-content-center">
            <Button label="Submit" onClick={Add} />
          </div>
        </div>
      </div>
    </>
  );
}
