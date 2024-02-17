const express = require("express");
const Router = express.Router();
const validator = require("express-validator");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_ ${file.filename}` + "-");
  },
});

const uploads = multer({ storage: storage });

Router.post("/users/data", uploads.single("image"), (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(401).send("file have to be uploaded")
  }
  try {
    res
      .status(201)
      .send({ mesage: "file uploaded succesfully", file: req.file });
  } catch (error) {
    res.status(201).json({ message: error, loacton: `error in user uploades` });
  }
});

module.exports = Router;
