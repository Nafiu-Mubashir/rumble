import {
  Like1,
  Dislike,
  Messages2,
  CodeCircle,
  DirectSend,
  Play,
  Timer1,
} from "iconsax-react";
import user from "../../assets/user.png";
import {
  Avatar,
  // Button,
  Divider,
  Drawer,
  Menu,
  Select,
  Spoiler,
} from "@mantine/core";
import RelatedVideo from "../../components/card/relatedVideos";
import { useContext } from "react";
import { SlideContext } from "../../context/sidebarCtx";
import { useDisclosure } from "@mantine/hooks";

const SingleVideos = () => {
  const { isOpen } = useContext(SlideContext);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="flex flex-col md:flex-col lg:flex-row gap-2 min-h-screen">
      <div
        className={`${
          isOpen ? "w-[90%] text-[0.7rem]" : "w-full lg:w-[80%]"
        } dark:text-white`}
      >
        <video
          className="aspect-ratio w-full h-full md:h-[60vh] lg:h-[70vh] bg-black"
          autoPlay
          muted
          loop
          controls
        >
          <source
            src="https://mazwai.com/videvo_files/video/free/2018-03/small_watermarked/180301_15_B_KowloonPark_06_preview.webm"
            type="video/mp4"
          />
        </video>
        <div className="p-3">
          <h3 className="font-bold lg:text-[1.5rem] mb-3 dark:text-white">
            Barstool Live from Barstool Scottsdale | April 6th, 2024
          </h3>
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-2 lg:items-center py-3 text-[0.8rem]">
            <div className="flex flex-col md:flex-row lg:flex-row gap-4 justify-between">
              <div className="flex items-center gap-3 h-[36.39px]">
                <img
                  src={user}
                  alt="image"
                  className="h-[32px] w-[32px] rounded-full"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="text-[0.8rem] font-bold w-full">
                      Barstool Gambling
                    </h4>
                    <svg
                      width="23"
                      height="24"
                      className="h-[16px] w-[16px] "
                      viewBox="0 0 23 24"
                    >
                      <path
                        fill="#74CC1D"
                        fillRule="evenodd"
                        d="M21.2 16a5.7 5.7 0 0 0 0-7.9A28.3 28.3 0 0 0 7.5.1 5.3 5.3 0 0 0 1.3 4 29 29 0 0 0 1 20.3a5.4 5.4 0 0 0 6.4 3.5A27 27 0 0 0 21.1 16Zm-6.5-6.3a1 1 0 0 0-1.4-1.4L8.5 13l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l5.5-5.5Z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[0.8rem] flex items-center gap-1">
                    6.3k followers
                  </p>
                </div>
              </div>
              {/* <button className="rounded-full text-[0.8rem] py-2 px-2 w-[50px] md:w-[50px] lg: bg-red-500 font-bold hover:bg-rumble-green-dark">
                Live
              </button> */}
              <button className="rounded-full text-[0.8rem] py-2 px-2 w-[77.08px] md:w-[60px] lg: bg-rumble-green font-bold hover:bg-rumble-green-dark">
                Follow
              </button>
            </div>
            <div className="flex gap-2 lg:gap-2 overflow-y-auto md:overflow-none lg:overflow">
              <div className="flex gap-1 border-b-4 rounded-full border-rumble-green">
                <button className="flex text-[0.8rem] gap-2 items-center font-semibold py-1 px-4 bg-gray-300 dark:bg-gray-700 rounded-l-full mb-[0.13rem]">
                  <Like1
                    size="16"
                    color=""
                    className="stroke-black dark:stroke-white"
                  />{" "}
                  2
                </button>
                <button className="flex text-[0.8rem] gap-2 items-center font-semibold py-1 px-4 bg-gray-300 dark:bg-gray-700 rounded-r-full mb-[0.13rem]">
                  <Dislike
                    size="16"
                    color=""
                    className="stroke-black dark:stroke-white"
                  />{" "}
                  0
                </button>
              </div>
              <div className="hidden lg:block">
                <button className="flex text-[0.8rem] gap-1 items-center font-semibold capitalize py-2 px-4 bg-gray-300 dark:bg-gray-700 rounded-full">
                  <Messages2
                    size="16"
                    color=""
                    className="stroke-black dark:stroke-white"
                  />{" "}
                  comment
                </button>
              </div>
              <div className="block lg:hidden">
                <button
                  className="flex text-[0.8rem] gap-1 items-center font-semibold capitalize py-3 px-4 bg-gray-300 dark:bg-gray-700 rounded-full"
                  onClick={open}
                >
                  <Messages2
                    size="16"
                    color=""
                    className="stroke-black dark:stroke-white"
                  />{" "}
                  comment
                </button>
              </div>
              <button
                className={`${
                  isOpen ? "hidden" : "md:hidden lg:block"
                } font-semibold capitalize py-1 px-4 bg-gray-300 dark:bg-gray-700 rounded-full`}
              >
                <p className="flex text-[0.8rem] gap-1 items-center">
                  <DirectSend
                    size="16"
                    color=""
                    className="stroke-black dark:stroke-white"
                  />{" "}
                  share
                </p>
              </button>
              <button
                className={`${
                  isOpen ? "hidden" : "md:hidden lg:block"
                } font-semibold capitalize py-1 px-4 bg-gray-300 dark:bg-gray-700 rounded-full`}
              >
                <p className="flex text-[0.8rem] gap-1 items-center">
                  <CodeCircle
                    size="16"
                    color=""
                    className="stroke-black dark:stroke-white"
                  />{" "}
                  embed
                </p>
              </button>

              <Menu
                position="top-start"
                classNames={{
                  dropdown:
                    "!rounded-lg md:!ml-[-20px] lg:!ml-[-100px] !w-1/5 lg:!w-[10%] dark:!bg-rumble-dark dark:border-gray-700",
                  item: "dark:hover:!bg-gray-700 dark:!text-white",
                }}
              >
                <Menu.Target>
                  <svg
                    className={`${
                      isOpen ? "block" : " hidden md:block lg:hidden"
                    } rounded-full bg-gray-300 dark:bg-gray-700 h-10 w-10 py-1 hover:cursor-pointer`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M13.5 6.00012c0 .82843-.6716 1.5-1.5 1.5s-1.5-.67157-1.5-1.5.6716-1.5 1.5-1.5 1.5.67157 1.5 1.5Zm0 5.99998c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Zm-1.5 7.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>
                    <p className="flex gap-1 items-center font-semibold">
                      <DirectSend
                        size="20"
                        color=""
                        className="stroke-black dark:stroke-white"
                      />{" "}
                      share
                    </p>
                  </Menu.Item>
                  <Menu.Item>
                    <p className="flex gap-1 items-center font-semibold">
                      <CodeCircle
                        size="20"
                        color=""
                        className="stroke-black dark:stroke-white"
                      />{" "}
                      embed
                    </p>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
          <Divider className="mb-3 mt-2 dark:border-gray-700" />
          <div className="bg-white dark:bg-rumble-dark rounded-lg p-3">
            <div className="flex gap-3 font-semibold text-[0.8rem]">
              <p className="flex gap-1 items-center">
                <Timer1
                  size="14"
                  color=""
                  className="stroke-black dark:stroke-white"
                />{" "}
                7 hours
              </p>
              <p className="flex gap-1 items-center">
                <Play
                  size="14"
                  color=""
                  className="stroke-black dark:stroke-white"
                />{" "}
                770
              </p>
            </div>
            <Spoiler
              maxHeight={22}
              showLabel="Show more"
              hideLabel="show less"
              className=""
            >
              <p>Always has.</p>
              <p className="mb-3">
                Subscribe so you don't miss daily postings of Full Episodes,
                Best Of's, and more!
              </p>
              <p className="mb-3">Follow The Yak here:</p>
              <p>Twitter: https://twitter.com/BarstoolYak</p>
              <p>Instagram: https://www.instagram.com/barstoolyak/</p>
              <p>Facebook: https://www.facebook.com/barstoolyak</p>
              <p>TikTok: https://www.tiktok.com/@barstoolyak</p>
            </Spoiler>
          </div>

          <div className="hidden lg:block">
            <div className="flex justify-between items-center mt-2">
              <p>0 comments</p>
              <Select
                label=""
                placeholder="Sort by likes"
                data={["sort by likes", "sort by newest"]}
                classNames={{
                  root: "w-[45%] md:w-[18%] lg:w-[18%]",
                  dropdown:
                    "dark:border-gray-700 dark:bg-rumble-dark dark:text-white",
                  option: "hover:!bg-gray-700",
                  input:
                    "dark:bg-rumble-dark dark:border-gray-700 focus:border-gray-700 !rounded-2xl dark:text-white",
                }}
              />
            </div>
            <div className="flex gap-4 mt-4">
              <Avatar radius="xl" size={50} />

              <textarea
                id="message"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-rumble-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-4 py-4 placeholder:font-bold"
                placeholder="Add a comment..."
              ></textarea>
            </div>
          
          </div>
          <Drawer
              offset={8}
              radius=""
              size={"xs"}
              opened={opened}
              onClose={close}
              title="Comments"
              position="bottom"
              classNames={{
                close: "dark:stroke-white dark:fill-white",
                header:
                  "dark:!bg-rumble-dark dark:!text-white border-b dark:!border-gray-700",
                content: "dark:!bg-rumble-dark dark:!text-white",
              }}
            >
              <div className="flex justify-between items-center mt-2">
                <p>0 comments</p>
                <Select
                  label=""
                  placeholder="Sort by likes"
                  data={["sort by likes", "sort by newest"]}
                  classNames={{
                    root: "w-[45%] md:w-[18%] lg:w-[18%]",
                    dropdown:
                      "dark:border-gray-700 dark:bg-rumble-dark dark:text-white",
                    option: "hover:!bg-gray-700",
                    input:
                      "dark:bg-rumble-dark dark:border-gray-700 focus:border-gray-700 !rounded-2xl dark:text-white",
                  }}
                />
              </div>
              <div className="flex gap-4 mt-4">
                <Avatar radius="xl" size={50} />

                <textarea
                  id="message"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-rumble-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-4 py-4 placeholder:font-bold"
                  placeholder="Add a comment..."
                ></textarea>
              </div>
            </Drawer>
        </div>
      </div>
      <div
        className={`w-[95%] space-y-2 m-auto rounded-lg lg:rounded-none lg:m-0 lg:w-[45%] p-1 lg:p-2 dark:border dark:border-gray-700 dark:bg-rumble-dark`}
      >
        <RelatedVideo />
        <RelatedVideo />
      </div>
    </div>
  );
};

export default SingleVideos;
