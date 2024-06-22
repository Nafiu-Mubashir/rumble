import { Grid } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const MyChannel = () => {
  return (
    <div className="p-4 py-8 dark:text-white">
      <h1 className="text-xl font-semibold text-titan-blue dark:text-white uppercase">
        MY CHANNELS
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
                    Custom URL
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Content
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3">
                    Option
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <div className="px-4 py-3">
                    You have not created any channels yet.
                  </div>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {/* Apple MacBook Pro 17" */}
                  </th>
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

export default MyChannel;
