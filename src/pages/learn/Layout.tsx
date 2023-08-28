import { Outlet } from "react-router-dom";
import LearnAside from "../../components/LearnAside";
import Navbar from "../../components/Navbar";

const LearnLayout = () => {
  return (
    <div className="learn-layout">
      <LearnAside />

      <div className="ml-72">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default LearnLayout;
