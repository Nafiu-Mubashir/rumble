import { CheckIcon, Drawer, Grid, Pagination, Radio } from "@mantine/core";
import SectionCards from "../../components/card/sectionCards";
import SectionHeader from "../../components/sectionsHeader";
import { useDisclosure } from "@mantine/hooks";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

const Trending = () => {
  const sortBy = ["most recent", "views"];
  const videoDate = ["today", "last week", "last month", "all time"];
  const duration = ["any", "short", "long"];
  const license = ["any", "license"];
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="">
      <SectionHeader
        title="Trending"
        icon={
          <svg
            width="70"
            height="70"
            viewBox="0 0 20 20"
            fill="none">
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2">
              <path d="m19.167 5-7.917 7.917L7.083 8.75.833 15"></path>
              <path d="M14.167 5h5v5"></path>
            </g>
          </svg>
        }
      />

      <div className="p-3 md:p-4">
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
            <SectionCards />
            <SectionCards />

            <Pagination
              total={5}
              value={2}
              // onChange={}
              color="#003366"
              radius={"lg"}
              className="mt-5 w-full md:w-[50%] m-auto mb-4 sticky"
              classNames={{
                // control: 'dark:bg-rumble-dark dark:text-white dark:hover:bg-rumble-dark',
                dots: "dark:text-white",
              }}
            />
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 12, lg: 4 }}
            classNames={{
              col: "hidden lg:block",
            }}>
            <div className="dark:bg-rumble-dark rounded-lg !p-2 lg:!p-5 mb-3 dark:text-white">
              <div>
                <Radio.Group
                  name="Sort by"
                  label="Sort by"
                  description=""
                  classNames={{
                    label: "mb-3",
                  }}>
                  {sortBy.map((item) => (
                    <Radio
                      value={item}
                      label={item}
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
              <div>
                <Radio.Group
                  name="Video Date"
                  label="Video Date"
                  description=""
                  classNames={{
                    label: "mb-3",
                  }}>
                  {videoDate.map((item) => (
                    <Radio
                      value={item}
                      label={item}
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
              <div>
                <Radio.Group
                  name="Duration"
                  label="Duration"
                  description=""
                  classNames={{
                    label: "mb-3",
                  }}>
                  {duration.map((item) => (
                    <Radio
                      value={item}
                      label={item}
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
              <div>
                <Radio.Group
                  name="Duration"
                  label="Duration"
                  description=""
                  classNames={{
                    label: "mb-3",
                  }}>
                  {license.map((item) => (
                    <Radio
                      value={item}
                      label={item}
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
      </div>
      <Drawer
        offset={8}
        radius="md"
        size={"lg"}
        opened={opened}
        position="bottom"
        onClose={close}
        title={
          <div
            onClick={close}
            className="cursor-pointer bg-black mx-auto font-semibold flex items-center gap-1 dark:bg-rumble-dark dark:border border-rumble-green-dark text-white p-1 rounded-full w-[7rem] justify-center mb-3 text-[0.8rem]">
            Collapse
            <ArrowDown2
              size="16"
              color="white"
              variant="Bold"
            />
          </div>
        }
        withCloseButton={false}
        classNames={{
          header: "dark:bg-rumble-dark dark:text-white",
          title: "!font-bold !text-2xl w-full",
          close: "!stroke-black dark:!stroke-white dark:hover:bg-rumble-dark",
          content: "dark:!bg-rumble-dark dark:text-white",
        }}>
        <div className="dark:bg-rumble-dark rounded-lg !p-2 lg:!p-5 mb-3 dark:text-white">
          <div>
            <Radio.Group
              name="Sort by"
              label="Sort by"
              description=""
              classNames={{
                label: "mb-3",
              }}>
              {sortBy.map((item) => (
                <Radio
                  value={item}
                  label={item}
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
          <div>
            <Radio.Group
              name="Video Date"
              label="Video Date"
              description=""
              classNames={{
                label: "mb-3",
              }}>
              {videoDate.map((item) => (
                <Radio
                  value={item}
                  label={item}
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
          <div>
            <Radio.Group
              name="Duration"
              label="Duration"
              description=""
              classNames={{
                label: "mb-3",
              }}>
              {duration.map((item) => (
                <Radio
                  value={item}
                  label={item}
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
          <div>
            <Radio.Group
              name="Duration"
              label="Duration"
              description=""
              classNames={{
                label: "mb-3",
              }}>
              {license.map((item) => (
                <Radio
                  value={item}
                  label={item}
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
      </Drawer>

      <div className="w-full backdrop-blur-md p-3 bottom-0 fixed lg:hidden">
        <div
          onClick={open}
          className="cursor-pointer bg-black mx-auto font-semibold flex items-center gap-1 dark:bg-rumble-dark dark:border border-rumble-green-dark text-white p-1 rounded-full w-[6rem] justify-center mb-3">
          Filters
          <ArrowUp2
            size="16"
            color="white"
            variant="Bold"
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
