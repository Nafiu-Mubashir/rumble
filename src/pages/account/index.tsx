import { Grid } from "@mantine/core";
import SideTab from "../../components/sideTab";

const UserAccount = () => {
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
                ACCOUNT OVERVIEW
              </h1>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
              <div className="w-full h-36 shadow bg-titan-blue ">
                <div className="flex flex-col md:flex-row items-center justify-between md:w-[90%] lg:w-[80%] mx-auto text-white">
                  <div className="md:mt-7 h-16 md:h-24 w-[70%] md:w-[40%] text-4xl">
                    <h1 className="mt-3 text-center md:text-left md:mt-5">
                      $0.00
                    </h1>
                  </div>
                  <div className="bg-black text-white shadow md:mt-7 h-16 md:h-24 w-[70%] md:w-[40%] text-center text-4xl">
                    <h1 className="mt-3 md:mt-5">Cash Out</h1>
                  </div>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 12 }}
              className="p-3">
              <h1 className="text-xl font-semibold">Estimated Earnings</h1>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 6, lg: 3 }}
              className="p-3">
              <div className="w-full h-36 cursor-pointer text-white shadow-md  bg-gray-600 dark:bg-gray-700">
                <div className="h-full w-full flex flex-col items-center justify-center text-4xl">
                  <h1 className=" text-center md:text-left">$0.00</h1>
                  <p className="text-sm capitalize">youtube earnings</p>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 6, lg: 3 }}
              className="p-3">
              <div className="w-full h-36 cursor-pointer text-white shadow-md  bg-gray-600 dark:bg-gray-700">
                <div className="h-full w-full flex flex-col items-center justify-center text-4xl">
                  <h1 className=" text-center md:text-left">$0.00</h1>
                  <p className="text-sm capitalize">3rd Party Earnings</p>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 6, lg: 3 }}
              className="p-3">
              <div className="w-full h-36 cursor-pointer text-white shadow-md  bg-gray-600 dark:bg-gray-700">
                <div className="h-full w-full flex flex-col items-center justify-center text-4xl">
                  <h1 className=" text-center md:text-left">$0.00</h1>
                  <p className="text-sm capitalize">Project Earnings</p>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 6, lg: 3 }}
              className="p-3">
              <div className="w-full h-36 cursor-pointer text-white shadow-md  bg-titan-blue ">
                <div className="h-full w-full flex flex-col items-center justify-center text-4xl">
                  <h1 className=" text-center md:text-left">$0.00</h1>
                  <p className="text-sm capitalize">Total</p>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 12 }}
              className="p-3">
              <h1 className="text-xl font-semibold">Recurring Revenue</h1>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 6 }}
              className="p-3">
              <div className="w-full h-36 cursor-pointer text-white shadow-md  bg-gray-600 dark:bg-gray-700">
                <div className="h-full w-full flex flex-col items-start px-3 space-y-2 justify-center text-4xl">
                  <h1 className=" text-center md:text-left">0</h1>
                  <p className="text-sm capitalize">Active Monthly Subs</p>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 6 }}
              className="p-3">
              <div className="w-full h-36 cursor-pointer text-white shadow-md  bg-titan-blue ">
                <div className="h-full w-full flex flex-col items-start px-3 space-y-2 justify-center text-4xl">
                  <h1 className=" text-center md:text-left">$0.00</h1>
                  <p className="text-sm capitalize">
                    Potencial Recurring Revenue{" "}
                  </p>
                </div>
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
}

export default UserAccount