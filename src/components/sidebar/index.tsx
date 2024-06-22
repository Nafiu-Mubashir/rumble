import {
  Award,
  Moon,
  Sun1,
  Timer1,
} from "iconsax-react";
import { RecordCircle } from "iconsax-react";
import { Link } from "react-router-dom";

import { Tooltip } from "@mantine/core";

import news from "../../assets/news.jpeg";
import user from "../../assets/user.png";
import { useThemeCtx } from "../../context/themeCtx";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const { theme, setTheme } = useThemeCtx();
  const navLink = [
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="main-menu-icon">
          <g clipPath="url(#clip0_239_730)">
            <path
              d="M4 10V21H10V15H14V21H20V10L12 3L4 10Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_239_730">
              <rect
                width="24"
                height="24"
                fill="currentColor"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "home",
      link: "/",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="main-menu-icon">
          <g clipPath="url(#clip0_374_4049)">
            <path
              d="M10.0004 14.65V9.34999L15.0004 12L10.0004 14.65ZM17.7704 10.32C17.0004 9.99999 16.5704 9.81999 16.5704 9.81999L18.0004 9.05999C19.8404 8.09999 20.5304 5.82999 19.5604 3.99999C18.5904 2.16999 16.3204 1.46999 14.4904 2.43999L6.00044 6.93999C4.71044 7.61999 3.93044 8.97999 4.00044 10.43C4.07044 11.85 4.93044 13.1 6.22044 13.68C6.25044 13.69 7.42044 14.18 7.42044 14.18L6.00044 14.93C4.17044 15.9 3.47044 18.17 4.44044 20C5.41044 21.83 7.68044 22.53 9.51044 21.56L18.0104 17.06C19.3004 16.38 20.0704 15.02 20.0004 13.57C19.9304 12.15 19.0604 10.89 17.7704 10.32ZM17.5404 16.18L9.04044 20.68C7.70044 21.39 6.03044 20.88 5.32044 19.54C4.61044 18.2 5.12044 16.53 6.46044 15.82L8.50044 14.74V13.53L7.81044 13.25L6.70044 12.79C5.71044 12.38 5.05044 11.44 5.00044 10.38C4.95044 9.31999 5.52044 8.31999 6.46044 7.81999L14.9604 3.31999C16.3004 2.60999 17.9704 3.11999 18.6804 4.45999C19.3904 5.79999 18.8804 7.46999 17.5404 8.17999L15.5004 9.25999V10.47L17.3004 11.21C18.2904 11.62 18.9504 12.56 19.0004 13.62C19.0504 14.68 18.4804 15.68 17.5404 16.18Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_374_4049">
              <rect
                width="24"
                height="24"
                fill="currentColor"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "browse",
      link: "/browse",
    },
    {
      icon: (
        <Award
          size="16"
          color=""
          variant="Bold"
          className="stroke-black dark:stroke-white"
        />
      ),
      name: "editor picks",
      link: "/editor-picks",
    },
    {
      icon: (
        <svg
          width="18"
          height="24"
          viewBox="0 0 18 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="main-menu-icon">
          <g clipPath="url(#clip0_374_4056)">
            <path
              d="M11.7203 17.84C11.4003 18.11 10.8903 18.37 10.4903 18.5C9.15031 18.83 8.08031 18.16 7.87031 18.04C7.66031 17.93 7.09031 17.66 7.09031 17.66C7.09031 17.66 7.44031 17.55 7.50031 17.53C8.84031 16.99 9.39031 16.29 9.59031 15.42C9.79031 14.58 9.43031 13.86 9.28031 13.03C9.16031 12.34 9.17031 11.75 9.40031 11.13C9.42031 11.08 9.52031 10.7 9.52031 10.7C9.52031 10.7 9.63031 11.05 9.65031 11.11C10.3603 12.62 12.3703 13.29 12.7203 14.95C12.7503 15.1 12.7703 15.25 12.7703 15.41C12.8003 16.3 12.4003 17.26 11.7203 17.84ZM9.40031 4.34C9.28031 4.42 9.18031 4.49 9.09031 4.56C6.10031 6.87 6.18031 10.49 6.78031 13.11L6.79031 13.14L6.80031 13.17C6.86031 13.52 6.75031 13.87 6.52031 14.13C6.28031 14.39 5.94031 14.54 5.57031 14.54C5.13031 14.54 4.72031 14.34 4.35031 13.94C3.68031 13.21 3.18031 12.37 2.85031 11.48C2.49031 12.25 2.10031 13.46 2.18031 14.67C2.22031 15.18 2.30031 15.67 2.43031 16.1C2.61031 16.7 2.86031 17.26 3.18031 17.75C4.23031 19.41 6.06031 20.57 7.96031 20.8C8.38031 20.85 8.81031 20.88 9.22031 20.88C10.5603 20.88 12.4703 20.61 13.9603 19.31C15.7303 17.75 16.3103 15.32 15.4003 13.25C15.3603 13.15 15.3403 13.11 15.3103 13.06L15.2703 12.98C15.0603 12.56 14.8003 12.17 14.5203 11.84C14.2803 11.54 14.0403 11.28 13.7303 11.01C13.4303 10.74 13.0903 10.5 12.7303 10.24C12.2703 9.91 11.8003 9.57 11.3503 9.15C9.98031 7.83 9.30031 6.11 9.40031 4.34ZM11.4103 2C11.4103 2 11.2103 2.2 10.8503 2.99C10.1903 4.91 10.7003 6.94 12.1903 8.38C12.9203 9.07 13.8003 9.55 14.5503 10.22C14.8703 10.51 15.1703 10.81 15.4403 11.15C15.8003 11.57 16.1003 12.04 16.3503 12.53C16.4003 12.63 16.4503 12.73 16.4903 12.83C17.6103 15.38 16.8503 18.3 14.7603 20.14C13.2303 21.47 11.2203 22 9.22031 22C8.75031 22 8.27031 21.97 7.81031 21.91C5.52031 21.63 3.39031 20.25 2.18031 18.34C1.79031 17.74 1.50031 17.08 1.30031 16.41C1.14031 15.87 1.05031 15.31 1.01031 14.74C0.890313 12.86 1.68031 11.11 2.09031 10.43C2.50031 9.74 3.64031 8.25 3.64031 8.25C3.64031 8.25 3.64031 8.28 3.63031 8.34C3.41031 10.11 4.00031 11.88 5.22031 13.22C5.37031 13.39 5.49031 13.44 5.56031 13.44C5.62031 13.44 5.65031 13.4 5.64031 13.35C4.79031 9.59 5.37031 6 8.35031 3.7C8.94031 3.24 9.86031 2.76 10.3303 2.52C10.8003 2.28 11.4103 2 11.4103 2Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_374_4056">
              <rect
                width="17.7647"
                height="24"
                fill="currentColor"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "trending",
      link: "/trending",
    },
    {
      icon: (
        <Timer1
          size="18"
          color=""
          variant="Bold"
          className="stroke-black dark:stroke-white"
        />
      ),
      name: "latest",
      link: "/latest",
    },
  ];

  const authRouts = [
    {
      icon: (
        <svg
          className="main-menu-icon"
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="currentColor">
          {" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.8334 6.66666H7.50003C7.03979 6.66666 6.66669 7.03975 6.66669 7.49999V15.8333C6.66669 16.2936 7.03979 16.6667 7.50003 16.6667H15.8334C16.2936 16.6667 16.6667 16.2936 16.6667 15.8333V7.49999C16.6667 7.03975 16.2936 6.66666 15.8334 6.66666ZM7.50003 4.99999C6.11931 4.99999 5.00003 6.11928 5.00003 7.49999V15.8333C5.00003 17.214 6.11931 18.3333 7.50003 18.3333H15.8334C17.2141 18.3333 18.3334 17.214 18.3334 15.8333V7.49999C18.3334 6.11928 17.2141 4.99999 15.8334 4.99999H7.50003Z"
            fill="currentColor"></path>
          <path
            d="M9.29365 13.9666C9.35247 14.496 9.88369 14.8103 10.3544 14.592C10.9913 14.2966 11.6192 13.958 12.2343 13.5752C12.8706 13.1793 13.4757 12.7471 14.0485 12.2828C14.438 11.9672 14.438 11.3658 14.0485 11.0501C13.4757 10.5858 12.8706 10.1536 12.2343 9.7577C11.6191 9.37489 10.9912 9.03654 10.3541 8.7413C9.88341 8.52315 9.3522 8.83745 9.29343 9.36686C9.20975 10.1208 9.16669 10.8882 9.16669 11.6664C9.16669 12.4447 9.20988 13.2124 9.29365 13.9666Z"
            fill="currentColor"></path>
          <path
            d="M13.3333 2.5C13.3333 2.03976 12.9602 1.66667 12.5 1.66667H4.16663C2.78591 1.66667 1.66663 2.78596 1.66663 4.16667V12.5C1.66663 12.9602 2.03972 13.3333 2.49996 13.3333C2.9602 13.3333 3.33329 12.9602 3.33329 12.5V4.16667C3.33329 3.70643 3.70639 3.33333 4.16663 3.33333H12.5C12.9602 3.33333 13.3333 2.96024 13.3333 2.5Z"
            fill="currentColor"></path>
        </svg>
      ),
      name: "Library",
      link: "/library",
    },
    {
      icon: (
        <svg
          className="main-menu-icon"
          width="17"
          height="17"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 5v5l3.333 1.667"></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.583 6.25C3.917 3.5 6.75 1.667 10 1.667c4.583 0 8.333 3.75 8.333 8.333s-3.75 8.333-8.333 8.333c-4.347 0-7.945-3.373-8.304-7.631"></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1.485 3.026.81 3.73 3.604-.917"></path>
        </svg>
      ),
      name: "Watch History",
      link: "/watch-history",
    },
    {
      icon: (
        <svg
          className="main-menu-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          {" "}
          <path d="M12 22c5.5228 0 10-4.4772 10-10 0-5.52285-4.4772-10-10-10C6.47715 2 2 6.47715 2 12c0 5.5228 4.47715 10 10 10Z"></path>
          <path d="M12 6v6l4 2"></path>
        </svg>
      ),
      name: "Watch Later",
      link: "/watch-later",
    },
  ];

  const featured = [
    {
      image: user,
      name: "Akademiks",
      followers: "4.6k",
    },
    {
      image: news,
      name: "NEWSMAX",
      followers: "2.58k",
    },
    {
      image: user,
      name: "Rekieta Law",
      followers: "1.82k",
    },
  ];

  const themeList = [
    {
      value: "dark",
      icon: (
        <Moon
          variant="Outline"
          className={
            theme === "dark"
              ? "dark:stroke-rumble-green-dark stroke-rumble-green-dark"
              : "stroke-black dark:stroke-white"
          }
          size="20"
        />
      ),
    },
    {
      value: "light",
      icon: (
        <Sun1
          variant="Outline"
          className={
            theme === "light"
              ? "dark:stroke-rumble-green-dark stroke-rumble-green-dark"
              : "stroke-black dark:stroke-white"
          }
          size="20"
        />
      ),
    },
  ];

  const handleTheme = (e: string) => {
    if (e === "light") setTheme("light");
    if (e === "dark") setTheme("dark");
    if (e === "system") setTheme("system");
  };

  return (
    <>
      <aside
        className={`${
          isOpen ? "w-[250px] block" : "w-[90px] hidden lg:block"
        } lg:z-0 main-side bg-white border dark:bg-rumble-dark dark:text-white text-center text-[12px] border-gray-300 dark:border-gray-700 text-black h-screen overflow-y-scroll `}>
        <div className="p-3 mt-12 m-auto space-y-">
          <div className="py-3">
            <div
              className={`${
                isOpen ? "items-start space-y-2 font-bold" : "items-center"
              } flex flex-col gap-4`}>
              {navLink.map(({ icon, name, link }, id) => (
                <Link
                  key={id}
                  to={link}
                  className={`${
                    isOpen ? "flex-ro w-full p-2 gap-2" : "flex-col w-14"
                  } flex items-center py-2 hover:bg-titan-blue hover:text-white group  dark:hover:bg-gray-700 hover:rounded-lg capitalize`}>
                  {icon} {name}
                </Link>
              ))}
            </div>
          </div>
         

          <div className="py-3">
            <div
              className={`${
                isOpen ? "items-start space-y-2 font-bold" : "items-center"
              } flex flex-col gap-4`}>
              {authRouts.map(({ icon, name, link }, id) => (
                <Link
                  key={id}
                  to={link}
                  className={`${
                    isOpen ? "flex-row w-full p-2 gap-3" : "flex-col w-14"
                  } flex items-center py-2 hover:bg-titan-blue hover:text-white group dark:hover:bg-gray-700 hover:rounded-lg capitalize`}>
                  {icon} {name}
                </Link>
              ))}
            </div>
          </div>

         

          <div className="w-full py-3">
            <h4
              className={`${
                isOpen ? "text-left flex gap-2" : "text-center"
              } font-bold  text-[0.8rem] mb-4`}>
              Featured{" "}
              <span className={`${isOpen ? "block" : "hidden"}`}>Channels</span>
            </h4>

            <div className="space-y-3">
              {featured.map(({ image, name, followers }, id) => (
                <div
                  className={`${
                    isOpen ? "justify-between" : "justify-center"
                  } flex items-center cursor-pointer`}
                  key={id}>
                  <div className="flex gap-2 items-center">
                    <Tooltip
                      arrowPosition="side"
                      arrowOffset={5}
                      arrowSize={4}
                      label={
                        <p
                          className={`bg-gray-100 dark:bg-gray-700 dark:text-white px-3 py-[0.1rem] text-black flex items-center rounded-full text-[.813rem] gap-2`}>
                          <RecordCircle
                            size={5}
                            color="red"
                            variant="Bold"
                          />{" "}
                          {followers}
                        </p>
                      }
                      // withArrow
                      position="right-start"
                      offset={{ mainAxis: 0, crossAxis: 0 }}
                      classNames={{
                        tooltip: `${
                          isOpen ? "hidden" : "block"
                        } !bg-white dark:!bg-rumble-dark !rounded-xl`,
                      }}>
                      {/* <Button>Button with tooltip</Button> */}
                      <img
                        src={image}
                        alt=""
                        className="w-[2rem] h-[2rem] rounded-full border-2 border-red-500"
                      />
                    </Tooltip>
                    <p className={`${isOpen ? "block" : "hidden"} text-sm`}>
                      {name}
                    </p>
                  </div>
                  <p
                    className={`${
                      isOpen ? "block" : "hidden"
                    } bg-gray-100 dark:bg-gray-700 px-3 py-[0.1rem] flex items-center rounded-full text-[.813rem] gap-2`}>
                    <RecordCircle
                      size={5}
                      color="red"
                      variant="Bold"
                    />{" "}
                    {followers}
                  </p>
                </div>
              ))}
            </div>
          </div>

         

          <div className="w-full py-3">
            <h4
              className={`${
                isOpen ? "text-left flex gap-2" : "text-center"
              } font-bold  text-[0.8rem] mb-4`}>
              Theme
            </h4>
            <div className="space-y-3">
              {themeList.map(({ value, icon }, id) => (
                <div
                  className={`${
                    isOpen ? "items-start space-y-2 font-bold" : "items-center"
                  } flex flex-col gap-4 cursor-pointer`}
                  key={id}
                  onClick={() => handleTheme(value)}>
                  <div
                    className={`${
                      isOpen
                        ? "flex-row gap-2"
                        : "flex-col items-center text-center w-16"
                    } flex`}>
                    <div
                    // className={theme === 'dark' ? 'bg-white' : 'bg-black'}
                    >
                      {icon}
                    </div>
                    <p
                      className={`font-semi-bold text-[0.7rem] ${
                        theme === value
                          ? "text-rumble-green-dark"
                          : "dark:text-white"
                      }`}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
