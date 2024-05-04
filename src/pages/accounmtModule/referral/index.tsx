import { Button, Grid } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const Referral = () => {
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
          <Grid>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 12 }}
              className="p-3">
              <h1 className="text-xl font-semibold text-titan-blue">
                REFERERS
              </h1>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
              <div className="w-full h-36 shadow bg-titan-blue flex">
                <div className="flex flex-col justify-center w-[95%] mx-auto text-white">
                  <div className="w-full text-lg">
                    <h1 className="text-left">REFERERS URL</h1>
                  </div>
                  <div className="bg-black text-white shadow py-2 px-2 w-full text-lg overflow-auto">
                    <h1 className="">
                      https://titan.com/register/Solomon0036/
                    </h1>
                  </div>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 12 }}
              className="p-3">
              <h1 className="text-xl font-semibold">Stats</h1>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 6, lg: 6 }}
              className="p-3">
              <div className="w-full h-36 cursor-pointer text-white shadow-md  bg-gray-600 dark:bg-gray-700">
                <div className="h-full w-full flex flex-col px-2 justify-center text-4xl">
                  <h1 className="">0</h1>
                  <p className="text-sm capitalize">youtube earnings</p>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 6, lg: 6 }}
              className="p-3">
              <div className="w-full h-36 cursor-pointer text-white shadow-md  bg-gray-600 dark:bg-gray-700">
                <div className="h-full w-full flex flex-col px-2 justify-center text-4xl">
                  <h1 className="">0</h1>
                  <p className="text-sm capitalize">Register Page</p>
                </div>
              </div>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, sm: 12, lg: 12 }}
              className="p-3">
              <div className="flex justify-between items-start">
                <h1 className="text-xl font-semibold">Comission Earned</h1>
                <div className="flex items-center gap-2">
                  Export:
                  <div>
                    <Button
                      className="!bg-titan-blue"
                      radius={0}>
                      CSV
                    </Button>
                    <Button
                      className="!bg-titan-blue"
                      radius={0}>
                      JSON
                    </Button>
                  </div>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 12 }}
              className="p-3">
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
            </Grid.Col>
          </Grid>
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

export default Referral;
