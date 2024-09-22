import React from "react";
import Upload from "../components/Upload";
import Topbar from "../components/Topbar";
import Post from "../components/Post";
const Feed = () => {
  return (
    <div className="w-4/6 h-auto overflow-auto no-scrollbar border border-slate-700">
      <Topbar />
      <Upload />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
