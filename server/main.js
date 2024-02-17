const exp = require("express");
const cors = require("cors");
const testing_router = require("./models/userloginss");
const { exec } = require("child_process");
const app = exp();
const cookies = require("cookie-parser");
app.use(cors());
app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());
app.use(cookies());
app.use("/test", testing_router);
const ImgRoutes = require("./router/Images");
const UserRoutes = require("./router/UserRoutes");

app.use("", ImgRoutes);
app.use("/users", UserRoutes);

const urlport = 4980;

app.listen(4980, () => {
  console.log(`server is runnning at `);
});
