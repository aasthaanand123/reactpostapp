// import mongoose from 'mongoose'; why this syntax cannot be applied here
const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
});

module.exports = mongoose.model("post", postSchema);
