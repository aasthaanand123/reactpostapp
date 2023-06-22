import React from "react";
import PostItem from "../PostItem/PostItem";
const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post._id} value={post} />
      ))}
    </div>
  );
};

export default PostList;
