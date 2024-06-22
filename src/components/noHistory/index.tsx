import image from "../../assets/astronaut-watching-tv.png";
import logo from "../../../public/titan-dark.png";
import Button from "../../components/button";
import { Lock1 } from "iconsax-react";
const NoHistory = ({title}:{title: string}) => {
  return (
    <div className="p-4 py-6 dark:text-white lg:w-[95%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 space-y-4">
        <div className="space-y-2 lg:mt-4 flex flex-col md:flex-row lg:flex-col md:gap-4 justify-center">
          <div className="h-[12rem] lg:h-[15rem] md:w-1/2 lg:w-[25rem] bg-gray-900 rounded-lg flex justify-center items-center lg:mb-8">
            <img
              src={logo}
              alt=""
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-2xl">{title}</h1>
            <div className="flex gap-4">
              <div className="flex gap-1 items-center justify-center border rounded-full px-1 md:px-3 lg:w-[15%] text-sm">
                <Lock1
                  size="14"
                  color=""
                  className="stroke-black dark:stroke-white"
                />
                <p>Private</p>
              </div>
              <p>
                <span className="py-1 px-2 rounded-full bg-titan-blue text-white">
                  U
                </span>
                <span className=""> Username</span>
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-1 items-center justify-center rounded-full text-sm">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.4167 6.54257V4.66671C12.4167 3.51611 11.484 2.58337 10.3334 2.58337H3.00008C1.84949 2.58337 0.916748 3.51611 0.916748 4.66671V11.3334C0.916748 12.484 1.84949 13.4167 3.00008 13.4167H10.3334C11.484 13.4167 12.4167 12.484 12.4167 11.3334V9.45735L15.8975 11.9436C16.1261 12.1069 16.4268 12.1287 16.6766 12.0002C16.9264 11.8716 17.0834 11.6142 17.0834 11.3333V4.66663C17.0834 4.38569 16.9264 4.12831 16.6766 3.99975C16.4268 3.8712 16.1261 3.89304 15.8975 4.05633L12.4167 6.54257ZM2.41675 4.66671C2.41675 4.34454 2.67792 4.08337 3.00008 4.08337H10.3334C10.6556 4.08337 10.9167 4.34454 10.9167 4.66671V11.3334C10.9167 11.6555 10.6556 11.9167 10.3334 11.9167H3.00008C2.67792 11.9167 2.41675 11.6555 2.41675 11.3334V4.66671ZM15.5834 9.8759L12.9571 7.99996L15.5834 6.12402V9.8759Z"></path>
                </svg>
                <p className="font-semibold">0 video</p>
              </div>
              <p className="text-sm font-semibold">Updated 9 days ago</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="mb-8 block mx-auto"
          />
          <div className="text-center space-y-2">
            <h1 className="font-bold text-2xl">No videos, yet</h1>
            <p>
              Go discover great content to watch and comeback here when you're
              done
            </p>
            <Button
              value=" Discover Content"
              classes="bg-titan-blue text-white !rounded-full block mx-auto py-4 px-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoHistory;
