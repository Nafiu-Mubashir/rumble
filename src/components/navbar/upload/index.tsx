import { Menu, NavLink } from "@mantine/core";
import { Video } from "iconsax-react";

const Upload = () => {
  return (
    <Menu
      classNames={{
        dropdown: "dark:bg-rumble-dark dark:border-gray-700 !p-3 !rounded-xl",
        item: "dark:text-white dark:hover:bg-gray-700 hover:roundedfull",
      }}
      offset={15}>
      <Menu.Target>
        <Video
          size="24"
          color=""
          className="stroke-titan-blue cursor-pointer"
        />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>
          <NavLink
            href="/upload-video"
            label="Upload video"
            className={` hover:text-white text-sm dark:hover:bg-gray-700 hover:rounded-lg capitalize`}
          />
        </Menu.Item>
        <Menu.Item>Go Live</Menu.Item>
        <Menu.Item>Studio</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default Upload;
