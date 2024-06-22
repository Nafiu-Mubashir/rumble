import { HambergerMenu } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";

import logo from "../../../public/titan-dark.png";
import darkLogo from "../../../public/titan-white.png";
import { useThemeCtx } from "../../context/themeCtx";
import Button from "../button";
import Login from "../login";
import MobileSidebar from "../sidebar/mobileSidebar";
import Notifications from "./notification";
import UserProfile from "./profile";
import Upload from "./upload";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [input, setInput] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);


  useEffect(() => {
    const signInStatus = localStorage.getItem('isSignedIn');
    setIsSignedIn(signInStatus === 'true');
  }, []);


  const showInput = () => {
    setInput(true);
  };

  const useOutsideAlerter = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setInput(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef);
  const { theme } = useThemeCtx();

  return (
    <nav
      className="bg-white dark:bg-rumble-dark dark:text-white main-nav w-full z-10 p-2 text-black fixed border border-gray-300 dark:border-gray-700"
      ref={wrapperRef}>
      <div className="flex justify-between items-center lg:w-[98%] mx-auto">
        <div className="flex gap-1 md:gap-5 lg:gap-10 items-center">
          <MobileSidebar />
          <HambergerMenu
            size="32"
            color=""
            className="stroke-black dark:stroke-white cursor-pointer hidden lg:block"
            onClick={toggleSidebar}
          />
          <img
            src={theme === "light" ? logo : darkLogo}
            alt=""
            className="h-5 md:h-8 lg:h-6 object-contain"
          />
        </div>
        <div
          className={
            input
              ? "absolute block left-0 right-0 md:w-[40%] lg:w-[35%]"
              : "relative md:w-[40%] lg:w-[35%] hidden md:block lg:block"
          }>
          <input
            type="search"
            id="default-search"
            className="block bg-white dark:bg-[#1F2E3C] w-full p-2 ps-3 text-sm text-gray-900 dark:text-gray-300 border outline-none border-gray-300 dark:border-[#1F2E3C] rounded-xl  focus:ring-black focus:border-black dark:focus:ring-gray-500 dark:focus:border-gray-500 "
            placeholder="Search"
            required
          />
          <div className="absolute inset-y-0 end-3 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
        <svg
          className="w-4 h-4 block md:hidden lg:hidden text-black dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          onClick={showInput}>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        {isSignedIn ? (
          <div className="flex items-center gap-5 ">
            <Upload />
            <Notifications />
            <UserProfile />
          </div>
        ) : (
          <div className="flex gap-2 items-center ">
            <Login />
            <a href="/registration">
              <Button
                classes="border border-titan-blue dark:hover:bg-gray-700 lg:py-2 hover:bg-gray-100"
                value="Sign Up"
              />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
