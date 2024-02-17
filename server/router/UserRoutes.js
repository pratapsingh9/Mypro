const express = require("express");
const { UserModel, ImgModel } = require("../Model");
const passport = require("passport");
const { user, useModal } = require("@nextui-org/react");
const { Route } = require("express");
const passport_local = require("passport-local").Strategy;
const Router = express.Router();
const jwt = require("jsonwebtoken");
const jwt_secret_key = "MY_SECRET_KEY";
const cookies = require("cookies");

Router.get("/images", async (req, res) => {
  try {
    const imagedata = await ImgModel.find();
    return res.status(201).json(imagedata);
  } catch (error) {
    return res.status(501).json({ message: "internal server error" });
  }
});

Router.get("/finduser/:id/:password", async (req, res) => {
  const { id, password } = req.params;
  try {
    if (!id || !password) {
      return res.status(401).json({ Message: "No Id Password Found" });
    } else {
      const finduser = await UserModel.findOne({
        username: id,
        password: password,
      });
      return res.status(201).json(finduser);
    }
  } catch (error) {
    return res.status(50);
  }
});

Router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
  if (!username || !password)
    return res
      .status(401)
      .json({ message: "Username And Password Not recieved" });
  try {
    const token = jwt.sign({ username, password }, jwt_secret_key, {
      expiresIn: 3000000,
    });
    console.log(token);
    const NewUsers = new UserModel({
      username: username,
      password: password,
    });
    res.cookie("token", token);
    await NewUsers.save();
    return res
      .status(201)
      .json({ Message: "New User SingUp Completed", token: token });
  } catch (error) {
    return res.status(501).json({ Message: "Server Side Error", Error: error });
  }
});

Router.get("/siginin", (req, res) => {
  const tokenheder = req.header.token;
  console.log();
  res.status(201).send(tokenheder);
});

Router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res
        .status(401)
        .json({ message: "Username and password are required" });
    } else {
      const foundPerson = await UserModel.findOne({ username, password });
      if (foundPerson) {
        return res.status(200).json({ message: "success", user: foundPerson });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

Router.get("/admin", async (req, res) => {});

Router.get("/", async (req, res) => {
  try {
    const Findedusers = await UserModel.find();
    res.status(201).json(Findedusers);
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "internal server error" });
  }
});

module.exports = Router;
