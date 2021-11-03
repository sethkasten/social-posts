import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool.",
    },
    {
      title: "React",
      thought: "React give me power!",
    },
    {
      title: "Beatrice",
      thought:
        "My friend Beatrice has mad skills. She made the top 10! I'm just so proud of her!",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const closeForm = () => setShowForm(false);

  const onSubmit = (post: Post): void => {
    setPosts((prev) => {
      return [...prev, post];
    });
  };

  const deletePost = (index: number) => {
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  return (
    <div className="SocialPosts">
      <header>
        <h1>My Thoughts</h1>
      </header>
      <button onClick={() => setShowForm(true)} className="NewThoughtButton">
        New Thought
      </button>
      {showForm && <PostForm onClose={closeForm} onSubmit={onSubmit} />}
      <div className="PostsContainer">
        <ul>
          {posts.map((post, i) => (
            <PostInList
              key={`${post.title}${i}`}
              post={post}
              index={i}
              onDelete={deletePost}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SocialPosts;
