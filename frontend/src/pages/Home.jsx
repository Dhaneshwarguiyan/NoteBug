import Sidebar from "../components/Sidebar";
import Rightbar from "../components/RightBar";
import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";

const Home = () => {

  return (
    <div className="w-full h-[calc(100vh-16px)]">
      <Navbar />
      <div className="h-[calc(100%-55px)] w-full flex overflow-hidden">
        <Sidebar/>
          <Outlet />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;

