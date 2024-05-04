// import { useState } from "react";

import { ColorPicker, useColor } from "react-color-palette";

import { Button, Divider, Grid, Menu } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const ChatSettings = () => {
  const [color, setColor] = useColor("rgb(86 30 203)");

  // const [modeColor, setModeColor] = useState(color)
  return (
    <div className="p-4 lg:p-8 dark:text-white">
      <Grid
        justify="space-between"
        classNames={{
          root: "gap-3",
        }}>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 9 }}
          classNames={{
            col: "",
          }}>
          <div className="space-y-4">
            <h1 className="font-bold text-xl text-titan-blue">CHAT SETTINGS</h1>
            <Divider />
            <div className="space-y-3">
              <h1 className="font-bold text-lg">Your username color:</h1>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Menu shadow="md">
                    <Menu.Target>
                      <Button
                        radius={100}
                        className="!w-40"
                        style={{ backgroundColor: `${color.hex}` }}>
                        Default
                        {/* {color.hex} */}
                      </Button>
                    </Menu.Target>

                    <Menu.Dropdown className="!z-0">
                      <ColorPicker
                        color={color}
                        onChange={setColor}
                      />
                    </Menu.Dropdown>
                  </Menu>
                  <Button
                    radius={100}
                    className="!bg-titan-blue">
                    Save
                  </Button>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">LIGHT MODE PREVIEW</h3>
                    <div className="w-[22.813rem] h-[10.25rem] bg-white text-black flex gap-3 p-6 rounded-md shadow justify-center">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="#003366"
                        />
                      </svg>
                      <div>
                        <h3
                          className={`font-bold`}
                          style={{ color: `${color.hex}` }}>
                          Username
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">DARK MODE PREVIEW</h3>
                    <div className="w-[22.813rem] h-[10.25rem] bg-rumble-dark text-white flex gap-3 p-6 rounded-md shadow justify-center">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="#003366"
                        />
                      </svg>
                      <div>
                        <h3
                          className="font-bold"
                          style={{ color: `${color.hex}` }}>
                          Username
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 3 }}
          classNames={{
            col: "hidden lg:block",
          }}>
          <SideTab />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default ChatSettings;
