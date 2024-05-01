import { Grid, Select } from "@mantine/core";

const Statistics = () => {
  return (
    <div className="p-4 lg:p-8 dark:text-white">
      <Grid
        justify="space-between"
        classNames={{
          root: "gap-3",
        }}>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 8 }}
          classNames={{
            col: "",
          }}>
          <Grid>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 12 }}
              className="p-3">
              <h1 className="text-xl font-semibold text-titan-blue">
                STATS & ANALYTICS
              </h1>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 6, lg: 4 }}
              className="p-3">
              <div className="w-full h-36 cursor-pointer text-white shadow-md  bg-gray-600 dark:bg-gray-700">
                <div className="h-full w-full flex flex-col items-center justify-center text-4xl">
                  {/* <h1 className=" text-center md:text-left">$0.00</h1>
                  <p className="text-sm capitalize">youtube earnings</p> */}
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 6, lg: 4 }}
              className="p-3">
              <div className="w-full h-36 cursor-pointer text-white shadow-md  bg-gray-600 dark:bg-gray-700">
                <div className="h-full w-full flex flex-col items-center justify-center text-4xl">
                  <h1 className=" text-center md:text-left">$0.00</h1>
                  <p className="text-sm capitalize">eCPM</p>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 6, lg: 4 }}
              className="p-3">
              <div className="w-full h-36 cursor-pointer text-white shadow-md  bg-titan-blue ">
                <div className="h-full w-full flex flex-col items-center justify-center text-4xl">
                  <h1 className=" text-center md:text-left">$0.00</h1>
                  <p className="text-sm capitalize">Estimated Earnings</p>
                </div>
              </div>
            </Grid.Col>
            {/* <Grid.Col
              span={{ base: 12, sm: 12, lg: 12 }}
              className="p-3">
              <h1 className="text-xl font-semibold">Recurring Revenue</h1>
            </Grid.Col> */}
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 4 }}
              className="p-3 space-y-3">
              <h1 className="text-lg text-gray-500 font-semibold">
                Select Filter
              </h1>
              <Select
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                  dropdown:
                    "dark:border-gray-700 dark:bg-rumble-content-dark dark:text-white",
                  option: "hover:!bg-gray-700",
                }}
                size="md"
                placeholder="09/02/2024 - 09/05/2024"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
              <Select
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                  dropdown:
                    "dark:border-gray-700 dark:bg-rumble-content-dark dark:text-white",
                  option: "hover:!bg-gray-700",
                }}
                size="md"
                placeholder="All Platforms"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
              <Select
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                  dropdown:
                    "dark:border-gray-700 dark:bg-rumble-content-dark dark:text-white",
                  option: "hover:!bg-gray-700",
                }}
                size="md"
                placeholder="By Date"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
              <Select
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                  dropdown:
                    "dark:border-gray-700 dark:bg-rumble-content-dark dark:text-white",
                  option: "hover:!bg-gray-700",
                }}
                size="md"
                placeholder="Daily"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 8 }}
              className="p-3 space-y-1">
              <div className="flex items-center justify-between">
                <h1 className="text-lg text-gray-500 font-semibold">
                  Graph
                </h1>
                <Select
                  classNames={{
                    root: "w-[45%] md:w-[18%] lg:w-[24%]",
                    input:
                      "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                    dropdown:
                      "dark:border-gray-700 dark:bg-rumble-content-dark dark:text-white",
                    option: "hover:!bg-gray-700",
                  }}
                  size="md"
                  placeholder="Earnings"
                  data={["React", "Angular", "Vue", "Svelte"]}
                />
              </div>
              <div className="w-full h-[30vh] cursor-pointer dark:text-white shadow-md bg-white dark:bg-gray-700 ">
                <div className="h-full w-full items-start p-3 space-y-2">
                  <p>Daily</p>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 4 }}
          classNames={{
            col: "hidden lg:block",
          }}>
          {/* child 2 */}
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Statistics