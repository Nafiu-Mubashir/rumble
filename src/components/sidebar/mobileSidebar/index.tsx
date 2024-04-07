import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { Award, Diagram, FolderOpen, HambergerMenu, House2, Monitor, Moon, RecordCircle, Sun1, Timer1 } from "iconsax-react";
import logo from '../../../assets/rumble-full-logo.svg';
import news from "../../../assets/news.jpeg";
import user from "../../../assets/user.png";

const MobileSidebar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const NavLink = [
    {
      icon: <House2 size="18" color="" variant="Bold" className="stroke-black block mx-auto"/>,
      name: "home",
      link: "/"
    },
    {
      icon: (
        <FolderOpen size="20" color="" className="stroke-black block mx-auto" />
      ),
      name: "browse",
      link: "/browse"
    },
    {
      icon: <Award size="20" color="" className="stroke-black block mx-auto" />,
      name: "editor picks",
      link: "/editor_picks"
    },
    {
      icon: <Diagram size="20" color="" className="stroke-black block mx-auto" />,
      name: "trending",
      link: "/trending"
    },
    {
      icon: <Timer1 size="20" color="" className="stroke-black block mx-auto" />,
      name: "latest",
      link: "/latest"
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
      value: "system default",
      icon: <Monitor variant="Outline" size="20" />,
    },
    {
      value: "dark",
      icon: <Moon variant="Outline" size="20" />,
    },
    {
      value: "light",
      icon: <Sun1 variant="Outline" size="20" />,
    },
  ];

  return (
    <>
      <Drawer
        opened={opened}
        size={"xs"}
        onClose={close}
        classNames={{
          body: "",
        }}
        title={<img src={logo} alt="" className='h-5 md:h-8 lg:h-full' />}
      >
        <aside
        className={"w-full block lg:z-0 main-side bg-white border border-gray-300 text-black h-screen overflow-y-scroll"}
      >
        <div className="p-3 mt-10 m-auto space-y-4">
          <div className="border-b py-3">
            <div
              className={`items-start space-y-2 font-bold flex flex-col gap-4`}
            >
              {NavLink.map(({ icon, name, link }, id) => (
                <a href={link}
                  key={id}
                  className={`flex flex-row gap-2`}
                >
                  {icon}
                  <p className="capitalize text-center text-[0.8rem]">{name}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full border-b py-3">
            <h4
              className={`text-left flex gap-2 font-bold  text-[0.8rem] mb-4`}
            >
              Featured{" "}
              <span className={``}>Channels</span>
            </h4>

            <div className="space-y-3">
              {featured.map(({ image, name, followers }, id) => (
                <div
                  className={`flex justify-between items-center cursor-pointer`}
                  key={id}
                >
                  <div className="flex gap-1 items-center">
                    <img
                      src={image}
                      alt=""
                      className="w-[2.3rem] h-[2.3rem] rounded-full border-2 border-red-500"
                    />
                    <p className={`font-semibold`}>
                      {name}
                    </p>
                  </div>
                  <p
                    className={`bg-gray-100 px-3 py-[0.1rem] flex items-center rounded-full text-[.813rem] gap-2`}
                  >
                    <RecordCircle size={5} color="red" variant="Bold" />{" "}
                    {followers}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full border-b py-3">
            <h4
              className={`text-left flex gap-2 font-bold  text-[0.8rem] mb-4`}
            >
              Theme
            </h4>

            <div className="space-y-3">
              {themeList.map(({ value, icon }, id) => (
                <div
                  className={`items-start space-y-2 font-bold flex flex-col gap-4 cursor-pointer`}
                  key={id}
                  // onClick={() => {
                  //   setTheme(theme === 'dark' ? 'light' : 'dark');
                  // }}
                >
                  <div className={`flex flex-row gap-2 `}>
                    <div 
                    // className={theme === 'dark' ? 'bg-white' : 'bg-black'}
                    >{icon}</div>
                    <p className={`font-semi-bold`}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      </Drawer>

      <HambergerMenu
        size="32"
        color=""
        className="stroke-black dark:stroke-black cursor-pointer block lg:hidden"
        onClick={open}
      />
    </>
  );
};

export default MobileSidebar;
