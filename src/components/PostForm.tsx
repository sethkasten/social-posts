import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onClose: () => void;
  onSubmit: (post: Post) => void;
}

const PostForm = ({ onClose, onSubmit }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const formHandler = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({ title, thought });
    onClose();
  };

  return (
    <div className="PostForm">
      <div className="PostFormBox">
        <button onClick={onClose} className="ExitButton">
          x
        </button>
        <form className="PostFormForm" onSubmit={formHandler}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="thought">Thought</label>
          <textarea
            name="thought"
            id="thought"
            cols={30}
            rows={10}
            value={thought}
            onChange={(e) => setThought(e.target.value)}
          ></textarea>
          <button className="AddPostButton">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
