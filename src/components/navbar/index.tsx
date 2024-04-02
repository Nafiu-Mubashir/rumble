import React from 'react'
import Button from '../button'
import { HambergerMenu } from "iconsax-react";
import Login from '../login';

interface NavbarProps {
    toggleSidebar: () => void;
  }
const Navbar = ({toggleSidebar}: NavbarProps) => {
  return (
    <nav className="bg-white main-nav w-full z-10 p-2 text-black fixe border border-gray-300">
        <div className="flex justify-between items-center lg:w-[98%] mx-auto">
          <div className="flex gap-10 items-center">
            <HambergerMenu
              size="32"
              color=""
              className="stroke-black dark:stroke-black cursor-pointer"
              onClick={toggleSidebar}
            />
            <h3 className="font-[700] text-2xl">LOGO</h3>
          </div>

          <div className="relative lg:w-[35%]">
            <input
              type="search"
              id="default-search"
              className="block bg-white w-full p-2 ps-3 text-sm text-gray-900 border outline-none border-gray-300 rounded-xl bg-gray-50 focus:ring-black focus:border-black "
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
            {/* <Link href={'/'}> */}
              <Button classes="border-2 border-green-500 hover:bg-gray-100" value="Sign Up" />
            {/* </Link> */}
          </div>
        </div>
      </nav>
  )
}

export default Navbar