import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Search from "./pages/Search";
import Notification from "./pages/Notification";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profile";
import Uploading from "./pages/Uploading";
import { Routes, Route } from "react-router-dom";
import "react-toastify/ReactToastify.css";



//make the code readable
//add auth context....


function App() {
  return (
    <div className="bg-white dark:bg-primary_dark font-nunito ">
      <div className="h-[100vh] overflow-scroll md:overflow-auto xl:max-w-[1480px] w-[90%] m-auto">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home/>}>
              <Route path="/" element={<Feed/>} />
              <Route path="/search" element={<Search />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/Bookmark" element={<Bookmark />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/upload" element={<Uploading />} />
            </Route>
            <Route />
          </Routes>
      </div>
    </div>
  );
}

export default App;
