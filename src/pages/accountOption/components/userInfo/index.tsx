// import { useState } from "react";

import { Button, TextInput } from "@mantine/core";

const UserInfo = () => {
  // const [profileImg, setProfileImg] = useState<string | null>(null);
  // const imageSelector = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const picture = e.target.files?.[0]; // Access files array safely using optional chaining
  //   const reader = new FileReader();
  //   if (picture) {
  //     reader.readAsDataURL(picture);
  //     reader.onloadend = () => {
  //       setProfileImg(reader.result as string); // Assert result type as string
  //     };
  //   }
  // };

  return (
    <>
      <div>
        <div className="full">
          <label
            htmlFor="date"
            className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
            User Page Display Information
          </label>
          <label
            htmlFor="date"
            className="block mb-1 text-gray-900 dark:text-gray-400 text-sm">
            PROFILE PICTURE
          </label>
        </div>
        <div className="">
          {/* {profileImg && (
            <img
              src={profileImg}
              alt="Profile"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          )} */}
        </div>
        <Button
          className="!bg-titan-blue"
          radius={0}>
          <div className="flex items-center justify-center w-full h-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
                <p className="text-md">Upload Picture</p>
              </div>
              <input
                // onClick={imageSelector}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </Button>
      </div>
      <div>
        <div className="full">
          <label
            htmlFor="date"
            className="block mb-1 text-gray-900 dark:text-gray-400 text-sm">
            BACKSPLASH PICTURE
          </label>
        </div>
        <div>
          {/* {profileImg && (
            <img
              src={profileImg}
              alt="Profile"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          )} */}
        </div>
        <Button
          className="!bg-titan-blue"
          radius={0}>
          <div className="flex items-center justify-center w-full h-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
                <p className="text-md">Upload Backsplash</p>
              </div>
              <input
                // onClick={imageSelector}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </Button>
      </div>
      <div className="space-y-4">
        <label
          htmlFor="date"
          className="block text-gray-900 dark:text-gray-400 text-md">
          DESCRIPTION
        </label>
        <div className=" gap-3">
          <TextInput
            placeholder="Name"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
        </div>
        <label
          htmlFor="date"
          className="block text-gray-900 dark:text-gray-400 text-md">
          SOCIALS
        </label>
        <div className="grid grid-col-1  gap-3">
          <TextInput
            placeholder="Facebook URL"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
          <TextInput
            placeholder="X(Twitter) URL"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />

          <TextInput
            placeholder="Instagram URL"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
          <TextInput
            placeholder="TruthSocial URL"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
        </div>

        <div className="flex justify-end">
          <Button
            radius={0}
            className="!bg-titan-blue text-white">
            Update
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
