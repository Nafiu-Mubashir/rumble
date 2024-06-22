import video from '../../../assets/v1.png';
import user from "../../../assets/user.png";
import { useContext } from "react";
import { SlideContext } from "../../../context/sidebarCtx";
import { Dislike, Like1, Eye, Messages2 } from "iconsax-react";

const SectionCards = ({
  status,
  playlist,
  leaderboarder,
}: {
  status?: string;
  playlist?: string;
  leaderboarder?: string;
}) => {
  const { isOpen } = useContext(SlideContext);
  return (
    <div className="dark:bg-rumble-dark rounded-lg !p-2 lg:!p-5 mb-3">
      <div className="w-full cursor-pointer group flex gap-3 dark:text-white">
        <div
          className={`${
            status === "live"
              ? " border-2 border-red-500 bg-red-500"
              : status === "upcoming"
              ? " border-2 bg-yellow-500 border-yellow-500"
              : "border-none"
          } rounded-lg relative w-[90%] md:w-[35%] h-[7rem] md:h-[9rem] lg:h-[10rem] space-y- border border-red-500`}
        >
          {leaderboarder && (
            <div
              className={`${
                isOpen
                  ? " lg:h-[10rem] w-full"
                  : "w-full h-full md:h-[13.816rem] lg:h-[12.063rem] "
              } rounded-lg absolute flex justify-center items-center font-bold text-[2.5rem] bg-black/40 text-white group-hover:bg-black/20 group-hover:text-white/30`}
            >
              1
            </div>
          )}
          <img src={video} alt="" className="w-full h-full rounded-lg" />
          <div>
            {playlist === "playlist" ? (
              <div className="bg-black/90 flex justify-between p-2 absolute w-full bottom-0 rounded-b-md">
                <p className="text-white font-semibold">200 video</p>
                <a href="/">
                  <svg
                    className="playlist__icon"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M3 12.7383h7"></path>
                    <path
                      stroke="white"
                      d="M15.8364 20.6212c-.7278.3644-1.5492-.1602-1.6401-1.0439C14.0668 18.3185 14 17.037 14 15.7378c0-1.299.0666-2.5799.196-3.8384.0908-.8837.9122-1.4083 1.64-1.0442.9851.4928 1.9559 1.0576 2.9072 1.6966.9838.6609 1.9195 1.3823 2.8052 2.1573.6021.5269.6021 1.5307 0 2.0577-.8857.775-1.8214 1.4964-2.8052 2.1573-.9511.6388-1.9219 1.2041-2.9068 1.6971Z"
                    ></path>
                    <path d="M3 6.73828h18M3 18.7383h7"></path>
                  </svg>
                </a>
              </div>
            ) : (
              <>
                <div
                  className={`${
                    status === "live" ? "block" : "hidden"
                  } flex items-center gap-2 bg-black text-white text-[0.7rem] font-bold uppercase absolute px-2 py-[0.1rem] rounded-md left-2 bottom-2`}
                >
                  {/* <Eye size="10" color="white" />3 */}
                </div>
                <div
                  className={`${
                    status === "live"
                      ? "bg-red-500 text-white"
                      : status === "upcoming"
                      ? "bg-yellow-500 text-black"
                      : "bg-black text-white"
                  } text-[0.7rem] font-bold uppercase absolute px-2 py-[0.1rem] rounded-md right-2 bottom-2`}
                >
                  {status === "live"
                    ? "Live"
                    : status === "upcoming"
                    ? "Upcoming"
                    : "15:20"}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="space-y-4 lg:space-y-8 w-[55%] h-[7rem]">
          <div className="space-y-2">
            <p className="text-[0.8rem] text-gray-400">1 day ago</p>
            <h3 className="font-semibold text-[0.6rem] md:text-[0.8rem]">
              Can KB Fit Inside a Balloon? | Best of The Yak 3-29-24
            </h3>
          </div>
          <div className="hidden md:block">
          <div className="flex items-center gap-3">
            <img
              src={user}
              alt="image"
              className="h-[25px] w-[25px] border rounded-full"
            />
            <div className="flex items-center gap-1">
              <h4 className="text-[13px]">Barstool Gambling</h4>
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
          </div>
          </div>
          <div className="flex gap-4 justify-between items-center text-gray-600 dark:text-gray-400">
            <div className="hidden md:block">
              <p className="flex gap-1 items-center text-[0.8rem]">
                <Like1
                  size="16"
                  color=""
                  variant="Bold"
                  className="stroke-gray-600 fill-gray-600 dark:stroke-gray-400 dark:fill-gray-400"
                />
                6.3k
              </p>
            </div>
            {/* <Progress
              color="lime"
              classNames={{
                section: "dark:bg-rumble-green-dark",
              }}
              size="lg"
              value={50}
            /> */}
            <div className="w-[30%] bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 hidden md:block">
              <div
                className="bg-rumble-green-dark h-1.5 rounded-full dark:bg-rumble-green-dark"
                style={{ width: "50%" }}
              ></div>
            </div>
            <div className="hidden md:block">
              <p className="flex gap-1 items-center text-[0.8rem]">
                <Dislike
                  size="16"
                  color=""
                  variant="Bold"
                  className="stroke-gray-600 fill-gray-600 dark:stroke-gray-400 dark:fill-gray-400"
                />
                235
              </p>
            </div>

            <p className="flex gap-1 items-center text-[0.8rem]">
              <Eye
                size="16"
                color=""
                className="stroke-gray-600 dark:stroke-gray-400"
              />
              6.3k
            </p>
            <p className="flex gap-1 items-center text-[0.8rem]">
              <Messages2
                size="16"
                color=""
                className="stroke-gray-600 dark:stroke-gray-400"
              />{" "}
              213
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
