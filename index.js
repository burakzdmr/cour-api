const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const courController = require("./controllers/cour");
const userController = require("./controllers/user");

const cors = require("cors");

dotenv.config();

let connectionStatus = false;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    connectionStatus = true;
    console.log("DB Connection Successfull!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.get("/api/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/check-connection", function (req, res) {
  if (connectionStatus) res.sendFile(__dirname + "/success.html");
  else res.sendFile(__dirname + "/index.html");
});
app.use("/api/cour", courController);
app.use("/api/user", userController);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
