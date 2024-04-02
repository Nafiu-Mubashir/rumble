import React from "react";
import { Eye, RecordCircle } from "iconsax-react";
import video from "../../assets/video.jpeg";
import user from "../../assets/user.png";

// interface CardProps {
// status?: 'live' | 'upcoming';
// image: string;
// title: string;
// videoDuration: string;
// videoLink: string;
// timeUploaded: string;
// views: string;
// author: string;
// }
// {status, image, title, videoDuration, views, timeUploaded, author, videoLink}: CardProps

const VideoCard = () => {
  const status = true
  return (
    <div className="w-[17.046rem] h-[14.865rem] px-2 group">
      <div className="w-[15.416rem] cursor-pointer">
        <div className={`${status === true ? ' border-2 border-red-500' : status === false ? ' border-2 border-yellow-500' : 'border-none'} w-[15.416rem] h-[139.86px]  rounded-lg relative border-red-500`}>
          <img src={video} alt="" className="w-full h-full rounded-lg" />
          <div>
            <div className={`${status === true ?'block' : 'hidden'} flex items-center gap-2 bg-black text-white text-[0.7rem] font-bold uppercase absolute px-2 py-[0.1rem] rounded-md left-2 top-[6.5rem]`}>
            <Eye size="10" color="white"/>
            3
            </div>
          <div className={`${status === true ? 'bg-red-500 text-white' : status === false ? 'bg-yellow-500 text-black' : 'bg-black text-white'} text-[0.7rem] font-bold uppercase absolute px-2 py-[0.1rem] rounded-md right-2 top-[6.5rem]`}>
            {
              status === true ? 'Live' : status === false ? 'Upcoming' : '15:20'
            }
          </div>
          </div>
        </div>
        <div className="space-y-2">
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
              <h4 className="text-[13px]">Barstool Gambling</h4>
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
  );
};

export default VideoCard;
