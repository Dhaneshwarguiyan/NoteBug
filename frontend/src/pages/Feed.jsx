import axios from "axios";
import Post from "../components/Post";
import useLogout from "../utils/logout";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const Feed = () => {
  const logout = useLogout();
  const [posts, setPosts] = useState(null);
  async function getPosts() {
    try {
      const post = await axios.get("http://localhost:8000/api/v1/posts", {
        withCredentials: true,
      });
      setPosts(post.data);
    } catch (error) {
      logout();
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="w-4/6 h-auto overflow-auto no-scrollbar border-r border-r-light_grey dark:border-r-extra_light_grey">
      {posts &&
        posts.map((data, index) => {
          return <Post data={data} key={index} />;
        })}
      <ToastContainer />
    </div>
  );
};

export default Feed;
