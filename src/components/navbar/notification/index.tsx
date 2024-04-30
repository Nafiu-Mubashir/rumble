import { Menu } from "@mantine/core";
import { Notification } from "iconsax-react";
import bell  from "../../../assets/bell.png";

const Notifications = () => {
  return (
    <Menu
      classNames={{
        dropdown:
          "dark:bg-rumble-dark dark:border-gray-700 !p-3 !rounded-xl lg:!w-[30%]",
        item: "dark:text-white dark:hover:bg-gray-700 hover:roundedfull",
      }}
      offset={15}>
      <Menu.Target>
        <Notification
          size="20"
          color=""
          className="stroke-black dark:stroke-white cursor-pointer"
        />
      </Menu.Target>
      <Menu.Dropdown>
        <h2 className="font-bold text-2xl text-white">Notification</h2>
        <Menu.Divider />
        <div className="py-3 dark:text-white text-center w-[18rem] mx-auto">
          <img
            src={bell}
            alt="bell"
            className="block mx-auto h-50"
          />
          <h2 className="font-bold text-2xl">Your notifications live here</h2>
          <p className="text-sm">
            Stay connected with the Rumble community by getting notified about
            activity on the platform.
          </p>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
}

export default Notifications