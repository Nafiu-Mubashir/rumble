import React, { useEffect, useRef, useState } from "react";
import Button from "../button";
import {
  // Brodcast,
  // Diagram,
  HambergerMenu,
  // Logout,
  // Profile,
  // Security,
  // Setting2,
  // Video,
} from "iconsax-react";
import Login from "../login";
import logo from "../../assets/rumble-full-logo.svg";
import darkLogo from "../../assets/rumble-full-logo-v4-dark.svg";
import MobileSidebar from "../sidebar/mobileSidebar";
import { useThemeCtx } from "../../context/themeCtx";
// import { Avatar, Menu } from "@mantine/core";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [input, setInput] = useState(false);

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
      ref={wrapperRef}
    >
      <div className="flex justify-between items-center lg:w-[98%] mx-auto">
        <div className="flex gap-1 md:gap-5 lg:gap-10 items-center">
          <MobileSidebar />
          <HambergerMenu
            size="32"
            color=""
            className="stroke-black dark:stroke-white cursor-pointer hidden lg:block"
            onClick={toggleSidebar}
          />
          <img src={theme === 'light' ? logo : darkLogo} alt="" className="h-5 md:h-8 lg:h-full" />
        </div>

        <div
          className={
            input
              ? "absolute block left-0 right-0 md:w-[40%] lg:w-[35%]"
              : "relative md:w-[40%] lg:w-[35%] hidden md:block lg:block"
          }
        >
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
              viewBox="0 0 20 20"
            >
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
          onClick={showInput}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>

        <div className="flex gap-2 items-center">
          <Login />
          <a href="/registration">
            <Button
              classes="border border-rumble-green lg:py-2 hover:bg-gray-100"
              value="Sign Up"
            />
          </a>
        </div>

        {/* <Menu>
          <Menu.Target>
            <Avatar
              variant="gray"
              radius="xl"
              src=""
              className="cursor-pointer"
            />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item leftSection={<Profile size="20" color="black" />}>
              Account Overview
            </Menu.Item>
            <Menu.Item
              leftSection={<Diagram size="20" color="black" className="" />}
            >
              Stats & Earnings
            </Menu.Item>
            <Menu.Item leftSection={<Video size="20" color="black" />}>
              My Content
            </Menu.Item>
            <Menu.Item leftSection={<Security size="20" color="black" />}>
              My Channels
            </Menu.Item>
            <Menu.Item leftSection={<Brodcast size="20" color="black" />}>
              Live Streaming
            </Menu.Item>
            <Menu.Item leftSection={<Setting2 size="20" color="black" />}>
              Account Option
            </Menu.Item>
            <Menu.Item leftSection={<Logout size="20" color="black" />}>
              Sign Out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu> */}
      </div>
    </nav>
  );
};

export default Navbar;
