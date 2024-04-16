import { Like1, Dislike, Messages2, CodeCircle, DirectSend } from "iconsax-react";
import user from "../../assets/user.png";
import { Menu } from "@mantine/core";
import RelatedVideo from "../../components/card/relatedVideos";
import { useContext } from "react";
import { SlideContext } from "../../context/sidebarCtx";

const SingleVideos = () => {
  const { isOpen } = useContext(SlideContext);
  return (
    <div className="flex flex-col md:flex-col lg:flex-row gap-3 min-h-screen">
      <div className={`${isOpen ? 'w-[] border' : 'w-[]'} dark:text-white`}>
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
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-2 lg:items-center py-3">
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
                        fill-rule="evenodd"
                        d="M21.2 16a5.7 5.7 0 0 0 0-7.9A28.3 28.3 0 0 0 7.5.1 5.3 5.3 0 0 0 1.3 4 29 29 0 0 0 1 20.3a5.4 5.4 0 0 0 6.4 3.5A27 27 0 0 0 21.1 16Zm-6.5-6.3a1 1 0 0 0-1.4-1.4L8.5 13l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l5.5-5.5Z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[0.8rem] flex items-center gap-1">
                    6.3k followers
                  </p>
                </div>
              </div>
              <button className="rounded-full text-[0.8rem] py-2 px-4 w-[77.08px] md:w- lg: bg-rumble-green font-bold hover:bg-rumble-green-dark">
                Follow
              </button>
            </div>
            <div className="flex gap-2 lg:gap-2 overflow-y-auto md:overflow-none lg:overflow">
              <div className="flex gap-1 border-b-4 rounded-full border-rumble-green">
                <button className="flex text-[0.8rem] gap-2 items-center font-semibold py-1 px-4 bg-gray-300 rounded-l-full mb-[0.13rem]">
                  <Like1 size="16" color="black" /> 2
                </button>
                <button className="flex text-[0.8rem] gap-2 items-center font-semibold py-1 px-4 bg-gray-300 rounded-r-full mb-[0.13rem]">
                  <Dislike size="16" color="black" /> 0
                </button>
              </div>
              <button className="flex text-[0.8rem] gap-1 items-center font-semibold capitalize py-1 px-4 bg-gray-300 rounded-full">
                <Messages2 size="16" color="black" /> comment
              </button>
              <button className="font-semibold capitalize py-1 px-4 md:hidden lg:block bg-gray-300 rounded-full">
                <p className="flex text-[0.8rem] gap-1 items-center">
                  <DirectSend size="16" color="black"/> share
                </p>
              </button>
              <button className="font-semibold capitalize py-1 px-4 md:hidden lg:block bg-gray-300 rounded-full">
                <p className="flex text-[0.8rem] gap-1 items-center">
                  <CodeCircle size="16" color="black"/> embed
                </p>
              </button>

              <Menu position="top-start" classNames={{
                dropdown: '!rounded-lg ml-[-20px] !w-1/5'
              }}>
                <Menu.Target>
                  <svg
                    className="rounded-full bg-gray-300 h-10 w-10 py-1 hidden md:block lg:hidden"
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
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>
                  <p className="flex gap-1 items-center font-semibold">
                  <DirectSend size="20" color="black"/> share
                </p>
                  </Menu.Item>
                  <Menu.Item>
                  <p className="flex gap-1 items-center font-semibold">
                  <CodeCircle size="20" color="black"/> embed
                </p>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <div className={`"w-full p-2 dark:border dark:border-gray-700"`}>
        <RelatedVideo />
      </div>
    </div>
  );
};

export default SingleVideos;
