import React from "react";

const PostItem = ({ value }) => {
  console.log(value);
  return (
    <div>
      <div>Title: {value.title}</div>
      <div>Author: {value.author}</div>
      <div>Description: {value.description}</div>

      <br />
      <br />
    </div>
  );
};

export default PostItem;
