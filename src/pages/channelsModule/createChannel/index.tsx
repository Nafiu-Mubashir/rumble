import { Button, Divider, Grid, TextInput } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const CreateChannel = () => {
  return (
    <div className="p-4 dark:text-white">
      <h1 className="text-xl font-semibold text-titan-blue uppercase">
        CREATE A NEW CHANNEL
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
          <form className="space-y-4">
            <div className="full">
              <label
                htmlFor="date"
                className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
                Channel Details:*
              </label>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-3">
              <TextInput
                placeholder="Name"
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
                // error="Please provide a username."
              />
              <TextInput
                placeholder="Title"
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
                // error="Please provide a username."
              />
            </div>
            <TextInput
              placeholder="Description"
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
              // error="Please provide a username."
            />

            <Divider my="md" />

            <div className="grid grid-col-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="full">
                  <label
                    htmlFor="date"
                    className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
                    THUMBNAIL:
                  </label>
                </div>
                <Button
                  className="!bg-titan-blue"
                  radius={5}>
                  <div className="flex items-center justify-center w-full h-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
                        <p className="text-md">Broese</p>
                      </div>
                      <input
                        // onClick={imageSelector}
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </Button>
                <p className="text-xs">
                  Preferred size: 150x150. Image types: PNG, JPG, GIF.
                </p>
              </div>
              <div className="space-y-3">
                <div className="full">
                  <label
                    htmlFor="date"
                    className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
                    BACKSPLASH:
                  </label>
                </div>
                <Button
                  className="!bg-titan-blue"
                  radius={5}>
                  <div className="flex items-center justify-center w-full h-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
                        <p className="text-md">Broese</p>
                      </div>
                      <input
                        // onClick={imageSelector}
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </Button>
                <p className="text-xs">
                  Preferred size: 150x150. Image types: PNG, JPG, GIF.
                </p>
              </div>
            </div>

            <Divider my="md" />

            <div className="full">
              <label
                htmlFor="date"
                className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
                SOCIAL URL(S)
              </label>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-3">
              <TextInput
                placeholder="Facebook"
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
                // error="Please provide a username."
              />
              <TextInput
                placeholder="X"
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
                // error="Please provide a username."
              />
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-3">
              <TextInput
                placeholder="TruthSocial"
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
                // error="Please provide a username."
              />
              <TextInput
                placeholder="Instagram"
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
                // error="Please provide a username."
              />
            </div>
            <div className="flex justify-end">
              <Button
                radius={0}
                className="!bg-titan-blue text-white">
                Create
              </Button>
            </div>
          </form>
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

export default CreateChannel;
