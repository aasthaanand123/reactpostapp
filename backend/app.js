const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/postRoutes");
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true })); //middleware to access input data which is encoded
app.use("/", router);
//after setting up mongoose server launch the backend server
mongoose.connect("mongodb://127.0.0.1:27017/postApp").then(
  app.listen(5656, () => {
    console.log("server is started at http://localhost:5656");
  })
);
