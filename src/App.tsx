import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { useState } from "react";

function Root() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={` h-screen ${isOpen ? "gridder-expand" : "gridder-collapse"}`}
    >
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} />
      {/* <AnimatePresence */}
      <div className="main-content bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
