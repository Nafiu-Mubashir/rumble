import { Avatar, Menu } from "@mantine/core";
import { Diagram, Video, Security, Brodcast, Setting2, Logout, Profile } from "iconsax-react";

const UserProfile = () => {
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
              className="stoke-black dark:stroke-white"
            />
          }>
          Account Overview
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Diagram
              size="20"
              color=""
              className="stoke-black dark:stroke-white"
            />
          }>
          Stats & Earnings
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Video
              size="20"
              color=""
              className="stoke-black dark:stroke-white"
            />
          }>
          My Content
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Security
              size="20"
              color=""
              className="stoke-black dark:stroke-white"
            />
          }>
          My Channels
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Brodcast
              size="20"
              color=""
              className="stoke-black dark:stroke-white"
            />
          }>
          Live Streaming
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Setting2
              size="20"
              color=""
              className="stoke-black dark:stroke-white"
            />
          }>
          Account Option
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Logout
              size="20"
              color=""
              className="stoke-black dark:stroke-white"
            />
          }>
          Sign Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default UserProfile