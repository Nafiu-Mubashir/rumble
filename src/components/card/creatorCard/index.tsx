import { useContext } from "react";
import user from "../../../assets/user.png";
import { SlideContext } from "../../../context/sidebarCtx";

const CreatorCard = () => {
  const { isOpen } = useContext(SlideContext);
  return (
    <div className={`${isOpen ? "w-[16rem]" : "w-full md:w-[90%] lg:w-[17.041rem]"}  h-[9.875rem] bg-gray-200 dark:bg-gray-700 dark:text-white py-6 rounded-lg"`}>
      <div className="w-[15.541rem] m-auto text-center">
        <img
          src={user}
          alt=""
          className="w-[3.75rem] h-[3.75rem] rounded-full block m-auto"
        />
        <div className="flex items-center justify-center gap-1">
          <h3 className="font-bold">ChiefTrumpster</h3>
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
        <p>1.16k Followers</p>
      </div>
    </div>
  );
};

export default CreatorCard;
