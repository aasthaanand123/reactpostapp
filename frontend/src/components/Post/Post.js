import React, { useEffect, useState } from "react";
import PostInput from "../PostInput/PostInput";
import PostList from "../PostList/PostList";
import axios from "axios";
const url = (myPath) => {
  return `http://localhost:5656/${myPath}`;
};
const Post = () => {
  let [initialPosts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(url("allItems"))
      .then((data) => {
        setPosts(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  function getData(title, author, description) {
    // return title, author, description;
    console.log(title, description, author);
    axios
      .post(url("savePost"), {
        title: title,
        author: author,
        description: description,
      })
      .then((data) => {
        setPosts(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <PostInput getData={getData} />
      {initialPosts.length > 0 && <PostList posts={initialPosts} />}
    </div>
  );
};

export default Post;
