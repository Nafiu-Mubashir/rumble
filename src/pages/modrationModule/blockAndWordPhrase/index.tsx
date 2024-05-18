import { Button, Grid, Select, Textarea } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const BlockWordPhrase = () => {
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
          className="space-y-6">
          <h1 className="text-xl font-semibold text-titan-blue uppercase">
            BLOCKED WORDS AND PHRASES
          </h1>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-titan-blue uppercase">
              Channels:
            </h1>
            <Select
              classNames={{
                root: "!",
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                dropdown:
                  "dark:border-gray-700 dark:bg-rumble-content-dark dark:text-white",
                option: "hover:!bg-gray-700",
              }}
              size="md"
              placeholder="Username"
              data={["React", "Angular", "Vue", "Svelte"]}
            />
          </div>
          <div className="space-y-4">
            <p>List of blocked words and phrases:</p>
            <p className="text-red-400 text-xs">
              * Put each word or phrase in a new line. Commas and semicolons are
              also treated as word separators.
            </p>
            <form className="space-y-3">
              <Textarea
                placeholder="Enter word and phrase here..."
                size="md"
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-700 !h-[300px]",
                }}
                radius={0}
              />
              <Button
                radius={0}
                className="!bg-titan-blue text-white">
                Save
              </Button>
            </form>
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

export default BlockWordPhrase;
