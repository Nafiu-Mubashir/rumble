import { Eye, RecordCircle } from "iconsax-react";
import video from "../../../assets/video.jpeg";
import user from "../../../assets/user.png";
import { useContext } from "react";
import { SlideContext } from "../../../context/sidebarCtx";

// interface CardProps {
// status?: 'live' | 'upcoming';
// image: string;
// title: string;
// videoDuration: string;
// videoLink: string;
// timeUploaded: string;
// views: string;
// author: string;
// playlist?: string;
// leaderboarder?: string;
// }
// {status, image, title, videoDuration, views, timeUploaded, author, videoLink, playlist, leaderboarder}: CardProps

const VideoCard = ({
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
   <a href="/single-video">
     <div
      className={`${
        isOpen ? "lg:w-[17rem]" : "w-full lg:w-[19rem] lg:h-auto py-2"
      } px-2 dark:text-white`}
    >
      <div className="w-full cursor-pointer group">
        <div
          className={`${
            status === "live"
              ? " border-2 border-red-500 bg-red-500"
              : status === "upcoming"
              ? " border-2 bg-yellow-500 border-yellow-500"
              : "border-none"
          } ${
            isOpen
              ? "lg:h-[10rem]"
              : "w-full h-[10.125reem] md:h-[13.816rem] lg:h-[12.063rem] border-red-500"
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
              <div className="bg-rumble-dark/90 flex justify-between p-2 absolute w-full bottom-0 rounded-b-md">
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
                  <Eye size="10" color="white" />3
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
        <div className="space-y-4">
          <h3 className="h-[41.9px]  font-[700] text-[16px]">
            Can KB Fit Inside a Balloon? | Best of The Yak 3-29-24
          </h3>
          <div className="flex items-center gap-3 h-[36.39px]">
            <img
              src={user}
              alt="image"
              className="h-[32px] w-[32px] rounded-full"
            />
            <div>
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
                    fill-rule="evenodd"
                    d="M21.2 16a5.7 5.7 0 0 0 0-7.9A28.3 28.3 0 0 0 7.5.1 5.3 5.3 0 0 0 1.3 4 29 29 0 0 0 1 20.3a5.4 5.4 0 0 0 6.4 3.5A27 27 0 0 0 21.1 16Zm-6.5-6.3a1 1 0 0 0-1.4-1.4L8.5 13l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l5.5-5.5Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[13px] flex items-center gap-1">
                15 hours ago{" "}
                <RecordCircle
                  size="5"
                  color="black"
                  className="mt-1"
                  variant="Bold"
                />{" "}
                6.3k views
              </p>
            </div>
            <svg
              className=" ml-auto hidden group-hover:block"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M13.5 6.00012c0 .82843-.6716 1.5-1.5 1.5s-1.5-.67157-1.5-1.5.6716-1.5 1.5-1.5 1.5.67157 1.5 1.5Zm0 5.99998c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Zm-1.5 7.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
   </a>
  );
};

export default VideoCard;
