import { Button, Grid, TextInput } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const ChatMuting = () => {
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
          <h1 className="text-xl font-semibold text-titan-blue uppercase">
            MUTED USER
          </h1>
          <form className="flex items-center gap-3">
            <TextInput
              placeholder="Search by username"
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
            <Button
              radius={0}
              className="!bg-gray-700 text-white">
              Clear
            </Button>
          </form>
          <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Muted User
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    On behalf of
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Video
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Muted on
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Expires
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4">No User</td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
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

export default ChatMuting;
