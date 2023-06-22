const Post = require("../models/Post");

//require model
//methods to do different tasks
module.exports.getPosts = async (req, res) => {
  try {
    let posts = await Post.find({});
    res.send(posts);
  } catch (err) {
    res.send(err);
  }
};
module.exports.getPost = async (req, res) => {
  try {
    let { author } = req.body;
    //get data req body
    let post = await Post.find({ author: author });
    res.send(post);
  } catch (err) {
    res.send(err);
  }
};
module.exports.postPost = async (req, res) => {
  try {
    //get data from input fields
    console.log(req);
    let { title, author, body } = req.body;
    console.log(title, author, body);
    await Post.create({ title: title, author: author, body: body });
    res.redirect("/allItems");
  } catch (err) {
    res.send(err);
  }
};
