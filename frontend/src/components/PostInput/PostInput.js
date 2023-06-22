import React, { useRef } from "react";

const PostInput = ({ getData }) => {
  let title = useRef("");
  let author = useRef("");
  let description = useRef("");

  function btnSubmitHandler(e) {
    e.preventDefault();

    //sent the data to the parent function
    getData(
      title.current.value,
      author.current.value,
      description.current.value
    );
    //empty inputs
    title = "";
    author = "";
    description = "";
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="enter title: "
          ref={title}
        />
        <input
          type="text"
          name="author"
          placeholder="enter author: "
          ref={author}
        />
        <input
          type="text"
          name="description"
          placeholder="enter description: "
          ref={description}
        />
        <button type="submit" onClick={btnSubmitHandler}>
          Enter
        </button>
      </form>
    </div>
  );
};

export default PostInput;
