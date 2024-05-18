import { Button, Grid, TextInput } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const AllVideos = () => {
  return (
    <div className="p-4 dark:text-white">
      <Grid
        justify="space-between"
        classNames={{
          root: "gap-3 py-4 lg:py-8 md:p-4 lg:p-6",
        }}>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 9 }}
          classNames={{
            col: "",
          }}
          className="space-y-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold text-titan-blue uppercase">
              ALL VIDEOS
            </h1>
            <form className="flex items-center">
              <TextInput
                placeholder="Username"
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
                // error="Please provide a username."
              />
              <Button
                radius={0}
                className="!bg-titan-blue text-white">
                Search
              </Button>
            </form>
          </div>
          <p>No videos found matching that criteria.</p>
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

export default AllVideos;
