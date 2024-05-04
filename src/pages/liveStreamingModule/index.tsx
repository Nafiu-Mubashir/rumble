// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

import { Button, Grid, Tabs } from "@mantine/core";

import SideTab from "../../components/sideTab";
import API from "./api";
import LiveStreams from "./liveStreams";
import StaticStreamKey from "./stacticStreamKey";
import StaticURL from "./staticURL";
import Template from "./template";

const LiveStreaming = () => {
  // const [activeTab, setActiveTab] = useState<string | null>("live-stream");

  // const base = "/live-streaming/";
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname.includes(base + "streams")) {
  //     setActiveTab("live-stream");
  //   } else {
  //     setActiveTab("template");
  //   }
  // }, [location]);
  return (
    <div className="p-4  dark:text-white">
      <h1 className="text-xl font-semibold text-titan-blue">LIVE STREAMS</h1>
      <Grid
        justify="space-between"
        classNames={{
          root: "gap-3 py-4 lg:py-8",
        }}>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 9 }}
          classNames={{
            col: "",
          }}>
          <div className="flex justify-end">
            <Button
              className="!bg-titan-blue mb-3"
              radius={100}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_374_6444)">
                  <path
                    d="M14 11.9999C14 13.0999 13.1 13.9999 12 13.9999C10.9 13.9999 10 13.0999 10 11.9999C10 10.8999 10.9 9.99992 12 9.99992C13.1 9.99992 14 10.8999 14 11.9999ZM8.48 8.44992L7.77 7.74992C6.68 8.82992 6 10.3399 6 11.9999C6 13.6599 6.68 15.1699 7.77 16.2499L8.48 15.5399C7.57 14.6399 7 13.3899 7 11.9999C7 10.6099 7.57 9.35992 8.48 8.44992ZM16.23 7.74992L15.52 8.45992C16.43 9.35992 17 10.6099 17 11.9999C17 13.3899 16.43 14.6399 15.52 15.5499L16.23 16.2599C17.32 15.1699 18 13.6599 18 11.9999C18 10.3399 17.32 8.82992 16.23 7.74992ZM5.65 5.62992L4.95 4.91992C3.13 6.72992 2 9.23992 2 11.9999C2 14.7599 3.13 17.2699 4.95 19.0799L5.66 18.3699C4.02 16.7399 3 14.4899 3 11.9999C3 9.50992 4.02 7.25992 5.65 5.62992ZM19.05 4.91992L18.34 5.62992C19.98 7.25992 21 9.50992 21 11.9999C21 14.4899 19.98 16.7399 18.35 18.3699L19.06 19.0799C20.87 17.2699 22 14.7599 22 11.9999C22 9.23992 20.87 6.72992 19.05 4.91992Z"
                    fill="#F5F5F5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_374_6444">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              Set Up New Stream
            </Button>
          </div>
          <Tabs
            color="#003366"
            defaultValue={"live-stream"}
            // value={activeTab}
            // keepMounted={true}
            // onChange={(value) => {
            //   setActiveTab(value);
            //   if (value === "rep") {
            //     !location.pathname.includes(base + "streams") &&
            //       navigate(`${base + "streams"}`);
            //   } else {
            //     navigate(base);
            //   }
            // }}
            classNames={{
              panel: "",
              tabLabel: "lg:text-[1.2rem]",
              list: "w-[100%] overflow-x-scroll lg:overflow-hidden dark:!bg-rumble-dark dark:!text-white",
              tab: "hover:bg-gray-200 dark:hover:!bg-rumble-dark",
            }}>
            <Tabs.List>
              <Tabs.Tab value="live-stream">Live Stream</Tabs.Tab>
              <Tabs.Tab value="template">Template</Tabs.Tab>
              <Tabs.Tab value="static-stream-key">Statcic Stream Key</Tabs.Tab>
              <Tabs.Tab value="static-urls">Static URLs</Tabs.Tab>
              <Tabs.Tab value="api">API</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel
              value="live-stream"
              className="">
              <LiveStreams />
            </Tabs.Panel>

            <Tabs.Panel
              value="template"
              className="">
              <Template />
            </Tabs.Panel>

            <Tabs.Panel
              value="static-stream-key"
              className="">
              <StaticStreamKey />
            </Tabs.Panel>

            <Tabs.Panel
              value="static-urls"
              className="">
              <StaticURL />
            </Tabs.Panel>

            <Tabs.Panel
              value="api"
              className="">
              <API />
            </Tabs.Panel>
          </Tabs>
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
}

export default LiveStreaming