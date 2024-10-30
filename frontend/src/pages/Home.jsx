import Sidebar from "../components/Sidebar";
import Feed from "./Feed";
import Rightbar from "../components/RightBar";
import Search from "./Search";
import Notification from "./Notification";
import Profile from "./Profile";
import Bookmark from "./Bookmark";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";

const Home = ({ setLoggedIn ,darkMode,setDarkMode}) => {

  return (
    <div className="w-full h-[calc(100vh-16px)]">
      <Navbar setLoggedIn={setLoggedIn} darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="h-[calc(100%-55px)] w-full flex overflow-hidden">
        <Sidebar setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path="/" element={<Feed setLoggedIn={setLoggedIn} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
