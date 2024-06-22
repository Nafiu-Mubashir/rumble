import { Link } from "react-router-dom";

import { Grid } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const Emotes = () => {

  const dottedDivs = Array.from({ length: 45 }, (_, index) => (
    <div key={index} className="border-2 border-dotted h-[80px]"></div>
  ));

  return (
    <div className="p-4 py-8 dark:text-white">
      <h1 className="text-xl font-semibold text-titan-blue dark:text-white uppercase">
        EMOTES
      </h1>
      <Grid
        justify="space-between"
        classNames={{
          root: "gap-3 py-4 lg:py-8 md:p-4 lg:p-6",
        }}>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 9 }}
          classNames={{
            col: "",
          }}>
          <div className="space-y-4">
            <div className="bg-white dark:bg-rumble-dark space-y-4 border border-gray-500 p-4">
              <div className="flex gap-3 items-center ">
                <p>Username Emote</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#36454F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#36454F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#36454F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-3 lg:grid-cols-9">
              {dottedDivs}
              </div>
            </div>

            <div className="bg-white dark:bg-rumble-dark space-y-4 border border-gray-500 p-4">
              <div className="flex gap-3 items-center ">
                <p>No Channel</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Please create a channel to add channel emotes.</p>
                <Link
                  to={"/create-channel"}
                  className="border px-4 py-2 rounded-full">
                  Create Channel
                </Link>
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
}

export default Emotes