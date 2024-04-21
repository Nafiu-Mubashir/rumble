import { useDisclosure } from "@mantine/hooks";
import SectionHeader from "../../components/sectionsHeader";
import { Modal, Pagination, Radio } from "@mantine/core";
import VideoCard from "../../components/card/videoCard";

const EditorPicks = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const sortBy = ["upload", "view count"];
  const videoDate = [
    "today",
    "last week",
    "last month",
    "last year",
    "all time",
  ];
  const duration = ["any", "under 4 minutes", "over 20 minutes"];
  return (
    <div className="dark:text-white">
      <SectionHeader
        title="Editor Picks"
        icon={
          <svg width="60" height="60" viewBox="0 0 20 20" fill="none">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.75"
              d="M10 12.273a5.303 5.303 0 1 0 0-10.606 5.303 5.303 0 0 0 0 10.606Z"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.75"
              d="m7.129 11.432-.917 6.901L10 16.061l3.788 2.272-.917-6.909"
            ></path>
          </svg>
        }
      />
      <div className="p-4">
        <Modal
          opened={opened}
          onClose={close}
          title="Filters"
          centered
          classNames={{
            header:
              "dark:bg-rumble-dark dark:text-white border-b border-gray-700",
            title: "!font-bold !text-2xl",
            close: "!stroke-black dark:!stroke-white dark:hover:bg-rumble-dark",
            content: "dark:!bg-rumble-dark dark:text-white",
          }}
        >
          <div className="flex justify-between py-4">
            <div>
              <Radio.Group
                name="Sort by"
                label="Sort by"
                description=""
                classNames={{
                  label: "mb-3",
                }}
              >
                {sortBy.map((item) => (
                  <Radio
                    value={item}
                    label={item}
                    iconColor="dark.8"
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
                }}
              >
                {videoDate.map((item) => (
                  <Radio
                    value={item}
                    label={item}
                    iconColor="dark.8"
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
                }}
              >
                {duration.map((item) => (
                  <Radio
                    value={item}
                    label={item}
                    iconColor="dark.8"
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
        </Modal>

        <div
          onClick={open}
          className="cursor-pointer font-semibold flex items-center gap-1 border border-gray-600 p-1 rounded-full w-[6rem] justify-center mb-3"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="dark:stroke-white"
          >
            {" "}
            <rect x="6" y="2" width="1.33333" height="4" rx="0.666667"></rect>
            <rect x="10" y="6" width="1.33333" height="4" rx="0.666667"></rect>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.00004 7.33301C1.63185 7.33301 1.33337 7.63148 1.33337 7.99967C1.33337 8.36786 1.63185 8.66634 2.00004 8.66634H11.3334V7.33301H2.00004ZM12.3334 7.33301V8.66634H14C14.3682 8.66634 14.6667 8.36786 14.6667 7.99967C14.6667 7.63148 14.3682 7.33301 14 7.33301H12.3334Z"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.00004 3.33301C1.63185 3.33301 1.33337 3.63148 1.33337 3.99967C1.33337 4.36786 1.63185 4.66634 2.00004 4.66634H7.33337V3.33301H2.00004ZM8.33337 3.33301V4.66634H14C14.3682 4.66634 14.6667 4.36786 14.6667 3.99967C14.6667 3.63148 14.3682 3.33301 14 3.33301H8.33337Z"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.00004 11.333C1.63185 11.333 1.33337 11.6315 1.33337 11.9997C1.33337 12.3679 1.63185 12.6663 2.00004 12.6663H5.33337V11.333H2.00004ZM6.33337 11.333V12.6663H14C14.3682 12.6663 14.6667 12.3679 14.6667 11.9997C14.6667 11.6315 14.3682 11.333 14 11.333H6.33337Z"
            ></path>
            <rect x="4" y="10" width="1.33333" height="4" rx="0.666667"></rect>
          </svg>
          Filters
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <VideoCard status="live" />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
        <Pagination
          total={5}
          value={2}
          // onChange={}
          color="#77b23b"
          radius={"lg"}
          className="mt-5 w-full md:w-[50%] m-auto mb-4 sticky"
          classNames={{
            // control: 'dark:bg-rumble-dark dark:text-white dark:hover:bg-rumble-dark',
            dots: "dark:text-white",
          }}
        />
      </div>
    </div>
  );
};

export default EditorPicks;
