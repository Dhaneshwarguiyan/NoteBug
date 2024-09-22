import Sidebar from "../components/Sidebar";
import Feed from "./Feed";
import Rightbar from "../components/RightBar";
import Search from "./Search";
import Notification from "./Notification";
import Profile from "./Profile";
import Bookmark from "./Bookmark";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = ({ setLoggedIn }) => {
  return (
    <div className="h-full w-full flex">
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Rightbar />
    </div>
  );
};

export default Home;
