const express = require("express");
const router = express.Router();
const postController = require("../controller/postcontroller");
router.get("/allItems", postController.getPosts);
router.get("/oneItem", postController.getPost);
router.post("/savePost", postController.postPost);
//export router
module.exports = router;
