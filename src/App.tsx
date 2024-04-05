import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { useContext } from "react";
import Footer from "./components/footer";
import { SlideContext } from "./context/sidebarCtx";

function Root() {
  const { toggleSidebar, isOpen } = useContext(SlideContext);

  return (
   <>
     <div
      className={` h-screen ${isOpen ? "gridder-expand" : "gridder-collapse"}`}
    >
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} />
      {/* <AnimatePresence */}
      <div className="main-content bg-slate-100 ">
        <Outlet />
      </div>
    </div>
      <Footer />
   </>
  );
}

export default Root;
