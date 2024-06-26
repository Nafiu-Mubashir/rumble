import { Brodcast, Diagram, Logout, Profile, Security, Setting2, Video } from "iconsax-react";
import { Link } from "react-router-dom";

import { Avatar, Menu } from "@mantine/core";

const UserProfile = () => {
  const handleSignOut = () => {
    localStorage.clear();  // Clear all localStorage items
    // history.push('/'); 
    window.location.reload(); 
  }

  return (
    <Menu
      classNames={{
        dropdown: "dark:bg-rumble-dark dark:border-gray-700 !p-3 !rounded-xl",
        item: "dark:text-white dark:hover:bg-gray-700",
      }}>
      <Menu.Target>
        <Avatar
          variant="gray"
          radius="xl"
          src=""
          className="cursor-pointer"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <Profile
              size="20"
              color=""
              className="stroke-black dark:stroke-white"
            />
          }>
          <Link to={"/account"}>Account Overview</Link>
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Diagram
              size="20"
              color=""
              className="stroke-black dark:stroke-white"
            />
          }>
          <Link to={"/statistics"}>Stats & Earnings</Link>
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Video
              size="20"
              color=""
              className="stroke-black dark:stroke-white"
            />
          }>
          <Link to={"/"}>My Content</Link>
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Security
              size="20"
              color=""
              className="stroke-black dark:stroke-white"
            />
          }>
          <Link to={"/my-channel"}>My Channels</Link>
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Brodcast
              size="20"
              color=""
              className="stroke-black dark:stroke-white"
            />
          }>
          <Link to={"/live-streaming"}>Live Streaming</Link>
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Setting2
              size="20"
              color=""
              className="stroke-black dark:stroke-white"
            />
          }>
          <Link to={"/account-option"}>Account Option</Link>
        </Menu.Item>
        <Menu.Item
        onClick={handleSignOut}
          leftSection={
            <Logout
              size="20"
              color=""
              className="stroke-black dark:stroke-white"
            />
          }>
          Sign Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default UserProfile