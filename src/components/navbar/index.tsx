import Button from "../button";
import { HambergerMenu } from "iconsax-react";
import Login from "../login";
import logo from "../../assets/rumble-full-logo.svg";
import MobileSidebar from "../sidebar/mobileSidebar";
import { Avatar, Menu } from "@mantine/core";

interface NavbarProps {
  toggleSidebar: () => void;
}
const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <nav className="bg-white main-nav w-full z-10 p-2 text-black fixe border border-gray-300">
      <div className="flex justify-between items-center lg:w-[98%] mx-auto">
        <div className="flex gap-1 md:gap-5 lg:gap-10 items-center">
          <MobileSidebar />
          <HambergerMenu
            size="32"
            color=""
            className="stroke-black dark:stroke-black cursor-pointer hidden lg:block"
            onClick={toggleSidebar}
          />
          <img src={logo} alt="" className="h-5 md:h-8 lg:h-full" />
        </div>

        <div className="relative md:w-[40%] lg:w-[35%] hidden md:block lg:block">
          <input
            type="search"
            id="default-search"
            className="block bg-white w-full p-2 ps-3 text-sm text-gray-900 border outline-none border-gray-300 rounded-xl  focus:ring-black focus:border-black "
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>

        <div className="flex gap-2 items-center">
            <Login />
            <a href="/registration">
            <Button classes="border border-green-500 hover:bg-gray-100" value="Sign Up" />
            </a>
          </div>

        <Menu>
          <Menu.Target>
            <Avatar variant="gray" radius="xl" src="" className="cursor-pointer"/>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              // leftSection={
              //   <IconSearch style={{ width: rem(14), height: rem(14) }} />
              // }
            >
              Account Overview
            </Menu.Item>
            <Menu.Item
              // leftSection={
              //   <IconSearch style={{ width: rem(14), height: rem(14) }} />
              // }
            >
              Stats & Earnings
            </Menu.Item>
            <Menu.Item
              // leftSection={
              //   <IconSearch style={{ width: rem(14), height: rem(14) }} />
              // }
            >
              My Content
            </Menu.Item>
            <Menu.Item
              // leftSection={
              //   <IconSearch style={{ width: rem(14), height: rem(14) }} />
              // }
            >
              My Channels
            </Menu.Item>
            <Menu.Item
              // leftSection={
              //   <IconSearch style={{ width: rem(14), height: rem(14) }} />
              // }
            >
              Live Streaming
            </Menu.Item>
            <Menu.Item
              // leftSection={
              //   <IconSearch style={{ width: rem(14), height: rem(14) }} />
              // }
            >
              Account Option
            </Menu.Item>
            <Menu.Item
              // leftSection={
              //   <IconSearch style={{ width: rem(14), height: rem(14) }} />
              // }
            >
              Sign Out
            </Menu.Item>

            {/* Other items ... */}
          </Menu.Dropdown>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
