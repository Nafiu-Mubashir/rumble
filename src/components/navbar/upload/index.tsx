import { Menu } from "@mantine/core";
import { Video } from "iconsax-react";
import { Link } from "react-router-dom";

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
          <Link
            to="/upload-video"
            className={` darkhover:text-white text-sm hover:!bg-gray-100 h-5 dark:hover:bg-gray-700 hover:rounded-lg capitalize`}>
            Upload video
          </Link>
        </Menu.Item>
        <Menu.Item><Link to="/">Go Live</Link></Menu.Item>
        <Menu.Item><Link to="/">Studio</Link></Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default Upload;
