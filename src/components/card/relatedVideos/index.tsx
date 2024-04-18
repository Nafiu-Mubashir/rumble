import video from "../../../assets/video.jpeg";
import user from "../../../assets/user.png";
import { useContext } from "react";
import { SlideContext } from "../../../context/sidebarCtx";
import { Eye, MessageText1 } from "iconsax-react";

const RelatedVideo = ({
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
    <div>
      <div className="w-full cursor-pointer group flex gap-3 dark:text-white lg:mt-4">
        <div
          className={`${
            status === "live"
              ? " border-2 border-red-500 bg-red-500"
              : status === "upcoming"
              ? " border-2 bg-yellow-500 border-yellow-500"
              : "border-none"
          } ${
            isOpen
              ? "w-[90%] md:w-[40%] lg:w-[80%]"
              : "w-[90%] md:w-[30%] lg:w-[60%] h-[7rem] space-y- md:h-[7rem] border border-red-500"
          } rounded-lg relative`}
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
        <div className="space-y-1">
          <div className="flex items-center gap-3 h-[36.39px]">
            <img
              src={user}
              alt="image"
              className="h-[20px] w-[20px] rounded-full"
            />
              <div className="">
                <h4 className="text-[0.8rem]">Barstool Gambling</h4>
                <p className="text-[0.8rem] flex items-center gap-1">
                  15 hours ago
                </p>
              </div>
         
          </div>
          <h3 className="h-[41.9px]  font-semibold text-[0.8rem]">
            Can KB Fit Inside a Balloon? | Best of The Yak 3-29-24
          </h3>
          <div className="flex gap-2">
          <p className="flex gap-1 items-center text-[0.8rem]">
          <Eye size="16" color="" className="stoke-black dark:stroke-white"/>
            6.3k views
          </p>
          <p className="flex gap-1 items-center text-[0.8rem]">
          <MessageText1 size="16" color="" className="stoke-black dark:stroke-white"/>
            0
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideo;
