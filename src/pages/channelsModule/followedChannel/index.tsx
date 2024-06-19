import { Grid, Select, Switch } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const FollowedChannel = () => {
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
          <div className="flex justify-between items-center text-titan-blue dark:text-white">
            <h1 className="text-xl font-semibold uppercase">
              FOLLOWED CHANNELS
            </h1>
            <div className="bg-titan-blue px-4 py-2 text-white">
              Disabled all email notification
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Channel Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Followers
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Action
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Content
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Notification
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {/* Apple MacBook Pro 17" */}
                  </th>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h1 className="text-xl font-semibold text-titan-blue dark:text-white uppercase ">
            CATEGORIES
          </h1>
          <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Channel Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Followers
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Action
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Notification
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4">Latest</td>
                  <td className="px-6 py-4">
                    <div className="bg-titan-blue text-white px-3 py-2 text-center">
                      follow
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Switch
                      size="lg"
                      onLabel="ON"
                      offLabel="OFF"
                    />
                  </td>
                  <td className="px-6 py-4 w-[200px]">
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
                      placeholder="Country"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />
                  </td>
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
}

export default FollowedChannel