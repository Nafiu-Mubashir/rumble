import "./App.css";

import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { SlideContext } from "./context/sidebarCtx";

function Root() {
  const { toggleSidebar, isOpen } = useContext(SlideContext);
  // const params = useParams()

  console.log(window.location.pathname);
  
  

  return (
    <>
      <div
        className={` h-screen ${
          isOpen ? "gridder-expand" : "gridder-collapse"
        }`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} />
        {/* <AnimatePresence */}
        <div className="main-content bg-slate-100 lg:mt-[-8px] dark:bg-rumble-content-dark">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Root;
