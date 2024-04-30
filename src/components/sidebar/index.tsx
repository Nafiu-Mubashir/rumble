import {
  Award,
  Diagram,
  FolderOpen,
  House2,
  Moon,
  Sun1,
  Timer1,
} from "iconsax-react";
import news from "../../assets/news.jpeg";
import user from "../../assets/user.png";
import { RecordCircle } from "iconsax-react";
import { Divider, Tooltip } from "@mantine/core";
import { useThemeCtx } from "../../context/themeCtx";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const { theme, setTheme } = useThemeCtx();
  const navLink = [
    {
      icon: (
        <House2
          size="16"
          color=""
          variant="Bold"
          className="stroke-black hover:text-stroke-white dark:stroke-white"
        />
      ),
      name: "home",
      link: "/",
    },
    {
      icon: (
        <FolderOpen
          size="16"
          color=""
          variant="Bold"
          className="stroke-black dark:stroke-white"
        />
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
        <Diagram
          size="16"
          color=""
          variant="Bold"
          className="stroke-black dark:stroke-white"
        />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 5v5l3.333 1.667"></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.583 6.25C3.917 3.5 6.75 1.667 10 1.667c4.583 0 8.333 3.75 8.333 8.333s-3.75 8.333-8.333 8.333c-4.347 0-7.945-3.373-8.304-7.631"></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
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
                  } flex items-center py-2 hover:bg-titan-blue hover:text-white group dark:hover:bg-gray-700 hover:rounded-lg capitalize`}>
                  {icon} {name}
                </Link>
              ))}
            </div>
          </div>
          <Divider className="mb-3 dark:border-gray-700" />

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

          <Divider className="mb-3 dark:border-gray-700" />

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

          <Divider className="mb-3 dark:border-gray-700" />

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
