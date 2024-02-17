const { Route } = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const SECRETKEY = "PRATAPSINGH";
const { UserModel, ProfileMOdel } = require("../Model.js");
const cookies = require("cookie-parser");
Router.use(cookies());

//from this we have given user profile router

Router.post("/users", async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password) {
    return res
      .status(401)
      .send("there is no username and password you should send this");
  }
  try {
    const newUser = new ProfileMOdel({
      username: username,
      password: password,
      email: email,
    });

    await newUser.save();
    const token = jwt.sign(newUser, token, {
      expiresIn: 3000000,
    });

    res.cookie("token", token);

    return res.status(201).json({ message: "success" });
  } catch (error) {
    return res.status(501).send(" error found in post request internal server");
  }
});

Router.post("/auth/users", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).json({ message:"Invalid token"});
  }
  const decoded = jwt.decode(token, secret);
  try {
    const findPerson = ProfileMOdel.find({
      username: decoded.username,
      password: decoded.password,
    });
    if (!findPerson) {
      return res.status(403).send("No User found");
    }
    return res.status(201).json({
      person: findPerson,
      message: "Thanks For The User Login Generation",
    });
  } catch (error) {}
});

Router.post("/req", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(401)
      .send("there is no username and password you should send this");
  }
  const token = jwt.sign({ username, password }, SECRETKEY, {
    expiresIn: "30d",
  });
  res.cookie("tok", token);
  res.status(201).json({ token: token, header: "Header is set" });
});

Router.get("/req", async (req, res) => {
  const token = req.cookies.tok; // Correctly access the cookie

  console.log(token);

  if (!token) {
    console.log(token);

    return res.status(401).json({
      message: "token not founded",
      token: token,
    });
  }
  const decoded = jwt.decode(token, SECRETKEY).username;

  console.log(decoded);

  try {
    const FindedPerson = await UserModel.find({
      username: decoded,
    });

    console.log(FindedPerson);

    if (FindedPerson == null) {
      return res.status(402).send("no user founded as per the id");
    }

    return res.status(201).json({
      person: FindedPerson,
      message: "Thanks For The User Login Generation",
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "internal server error" });
  }
  return res.status(201).send({ token: token, message: "token is founded" });
});

module.exports = Router;
