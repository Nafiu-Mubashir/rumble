import { Button, Grid, Tabs } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const Transaction = () => {
  return (
    <div className="p-4  dark:text-white">
      <h1 className="text-xl font-semibold text-titan-blue">
        ACCOUNT TRANSACTION
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
          <Tabs
            color="#003366"
            defaultValue="processed"
            classNames={{
              panel: "",
              tabLabel: "lg:text-[1.2rem]",
              list: "w-[100%] overflow-x-scroll lg:overflow-hidden dark:!bg-rumble-dark dark:!text-white",
              tab: "hover:bg-gray-200 dark:hover:!bg-rumble-dark",
            }}>
            <Tabs.List>
              <Tabs.Tab value="processed">Processed</Tabs.Tab>
              <Tabs.Tab value="pending">Pending</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel
              value="processed"
              className="">
              <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3">
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3">
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3">
                        Currency
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3">
                        Description
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
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tabs.Panel>

            <Tabs.Panel
              value="pending"
              className="">
              <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3">
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3">
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3">
                        Currency
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3">
                        Description
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
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tabs.Panel>
          </Tabs>

          <Button
            radius={0}
            className="!bg-titan-blue text-white mt-4">
            Export CSV Report
          </Button>
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

export default Transaction;
