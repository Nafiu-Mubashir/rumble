import {
  CheckIcon,
  Grid,
  Radio,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";

const UploadVideo = () => {
  const sortBy = [
    {
      visibility: "Public",
      info: "(Anyone can watch this video)",
    },
    {
      visibility: "Unlisted",
      info: "(Only people with link can watch this video)",
    },
    {
      visibility: "Private",
      info: "(Only you can watch this video)",
    },
    {
      visibility: "Schedule",
      info: "(Select a date to make your video public)",
    },
  ];
  return (
    <div className="dark:text-gray-500 md:p-4 p-5 space-y-5">
      <h1 className="text-3xl font-semibold text-titan-blue dark:text-gray-500">
        UPLOAD, SHARE AND LICENSE YOUR VIDEOS
      </h1>
      <Grid className="">
        <Grid.Col
          span={{ base: 12, md: 12, lg: 6 }}
          className="">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-[60vh] cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
                <h4 className="font-semibold text-xl text-black dark:text-white">
                  Select Video to Upload
                </h4>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  or drag and drop the file here
                </p>
                <svg
                  className="w-40 h-40 mb-4 text-gray-500 dark:text-rumble-green-dark"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Maximum file size: 15GB
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 6 }}
          className="p-3">
          <Grid>
            <Grid.Col
              span={{ base: 12, xs: 12 }}
              className="p-3">
              <h1 className="text-xl font-semibold">Vide Info</h1>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, xs: 12 }}
              className="p-3">
              <TextInput
                placeholder="Video Title"
                size="md"
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-700 rounded-none",
                }}
                radius={0}
              />
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, xs: 12 }}
              className="p-3">
              <Textarea
                placeholder="Video Description"
                size="md"
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-700 !h-40",
                }}
                radius={0}
              />
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 12 }}
              className="p-3">
              <h1 className="text-xl font-semibold">Categories</h1>
            </Grid.Col>
            <Grid.Col
              span={{ base: 6, md: 6, lg: 6 }}
              className="p-3">
              <Select
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-700",
                  dropdown:
                    "dark:border-gray-700 dark:bg-gray-700 dark:text-white",
                  option: "hover:!bg-gray-700",
                }}
                radius={0}
                size="md"
                placeholder="- Primary Category -"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
            </Grid.Col>
            <Grid.Col
              span={{ base: 6, md: 6, lg: 6 }}
              className="p-3">
              <Select
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-700",
                  dropdown:
                    "dark:border-gray-700 dark:bg-gray-700 dark:text-white",
                  option: "hover:!bg-gray-700",
                }}
                radius={0}
                size="md"
                placeholder="- Secondary Category -"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 12 }}
              className="p-3">
              <h1 className="text-xl font-semibold">Video Thumbnails</h1>
            </Grid.Col>
            <Grid.Col
              span={{ base: 6, sm: 3, lg: 3 }}
              className="p-3">
              <div className="w-full h-32 cursor-pointer border shadow-md dark:bg-gray-700"></div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 6, sm: 3, lg: 3 }}
              className="p-3">
              <div className="w-full h-32 cursor-pointer border shadow-md dark:bg-gray-700"></div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 6, sm: 3, lg: 3 }}
              className="p-3">
              <div className="w-full h-32 cursor-pointer border shadow-md dark:bg-gray-700"></div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 6, sm: 3, lg: 3 }}
              className="p-3">
              <div className="w-full h-32 cursor-pointer border shadow-md dark:bg-gray-700">
                <div className="flex items-center justify-center w-full h-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
                      <p className="text-md text-gray-500 text-center dark:text-gray-400">
                        or choose your own
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, md: 12, lg: 12 }}
              className="p-3">
              <TextInput
                placeholder="Tags (Optional)"
                size="md"
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-700",
                }}
                radius={0}
              />
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, sm: 12, lg: 12 }}
              className="p-3">
              <h1 className="text-xl font-semibold">Visibility</h1>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, md: 12, lg: 12 }}
              className="p-3">
              <div className="border p-3">
                <div>
                  <Radio.Group>
                    {sortBy.map(({ visibility, info }) => (
                      <Radio
                        value={visibility}
                        label={
                          <div className="">
                            <p className="font-bold text-md">
                              {visibility}{" "}
                              <span className="text-sm font-normal">
                                {info}
                              </span>
                            </p>
                          </div>
                        }
                        iconColor="dark.8"
                        icon={CheckIcon}
                        color="lime.4"
                        className="mb-3"
                        classNames={{
                          label: "capitalize",
                        }}
                      />
                    ))}
                  </Radio.Group>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default UploadVideo;
