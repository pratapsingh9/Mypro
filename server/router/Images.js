const express = require("express");
const Router = express.Router();
const { ImgModel } = require("../Model");
const { checkSchema } = require("express-validator");
const validator = require("express-validator");

const UserValidationSchema = {
  username: {
    in: ["body"],
    errormessage: "Username Is Wrong",
    isLength: {
      errorMessage: "Username must Me bigger than 7 words",
      options: { min: 7 },
    },
  },
};
const validate_user = () => {
  checkSchema(UserValidationSchema);
  (req, res, next) => {
    const erros = validator.validationResult(req);
    if (!erros.isEmpty()) {
      return res.status(401).json({ error: "Error is username " });
    }
    next();
  };
};
//delted requests routes are here so you can get it from here
Router.delete("/add/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedImage = await ImgModel.findByIdAndDelete(id);
    if (!deletedImage) {
      return res.status(404).send({ message: "Image not found" });
    } else {
      res.status(201).json({ message: "success" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error deleting image", error });
  }
});

Router.get("/", async (req, res) => {
  try {
    const images = await ImgModel.find({});
    res.status(201).send(images);
  } catch (error) {
    res.status(501).send("Not Able to fetch Images");
  }
});

Router.patch("/add/:id", async (req, res) => {
  const { id } = req.params;
  const { name, url } = req.body;
  try {
    const updatedImage = await ImgModel.findByIdAndUpdate(
      id,
      { name, url },
      { new: true }
    );
    if (!updatedImage) {
      return res.status(404).json({ message: "Image not found" });
    }
    res
      .status(200)
      .json({ message: "Image updated successfully", updatedImage });
  } catch (error) {
    return res.status(500).send({ message: "Error updating image", error });
  }
});

Router.post("/addimg", async (req, res) => {
  const { name, url } = req.body;

  console.log(`name is ${name} and url is ${url}`);
  if (!name || !url) {
  
    return res.status(402).json({});
  }

  try {
    const newphtoo = await new ImgModel({
      name,
      url,
    });
    await newphtoo.save();
    return res.status(201).json({ status: "succes", messgae: "Image succes" });
  } catch (error) {
    return res.status(501).send("wroing error found");
  }
});

const username_valaidation = validator
  .body("username")
  .isLength({ min: 8 })
  .withMessage({ error: "Your Username Must Be Longer Than 8 words" })
  .isLength({ max: 15 })
  .withMessage({ error: "Username Must be smaller then 20 words" });

const email_validation = validator
  .body("email")
  .isEmail()
  .withMessage({ error: "please enter email only" });

Router.get("/imgs", validate_user, async (req, res) => {
  const errors = validator.validationResult(req);
  const { username, password, email } = req.body;
  try {
    if (errors.isEmpty()) {
      const imgs = await ImgModel.find({});
      return res.status(201).json(imgs);
    } else {
      const data = validator.matchedData(req);
      res.status(401).json({
        errors: errors.mapped,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = Router;
