import {
  Button,
  Checkbox,
  Divider,
  Grid,
  PasswordInput,
  TextInput,
} from "@mantine/core";

import SideTab from "../../components/sideTab";
import AccountInfo from "./components/accountInfo";
import PoliticalInfo from "./components/politicalInfo";
import UserInfo from "./components/userInfo";

const AccountOption = () => {
  const privacy = [
    "Show my video earnings publicly",
    "Hide my username from search results",
    "Enable my live streams to be raided",
  ];
  const notification = [
    "Notify me when my media gets approved and placed on the front page",
    "Notify me when a user comments on any of my uploaded media",
    "Notify me when a user comments on any of my comments",
    "Occasionally send me emails with Tips & Tricks",
  ];
  return (
    <div className="p-4 lg:p-8 dark:text-white">
      <Grid
        justify="space-between"
        classNames={{
          root: "gap-3",
        }}
        className="">
        <Grid.Col
          span={{ base: 12, md: 12, lg: 9 }}
          className="space-y-3">
          <Grid.Col
            span={{ base: 12, md: 12, lg: 12 }}
            className="space-y-3">
            <h3 className="dark:text-gray-400 font-semibold text-2xl">
              ACCOUNT OPTION
            </h3>
            <Divider />
          </Grid.Col>
          <div className="space-y-4">
            <div className="full">
              <label
                htmlFor="date"
                className="block mb-1 text-gray-900 dark:text-gray-400 text-2xl">
                Account Information
              </label>
            </div>
            <AccountInfo />
            <Divider />
            <div className="space-y-6">
              <div className="grid grid-col-1 md:grid-cols-2 gap-3">
                <TextInput
                  placeholder="Email"
                  classNames={{
                    input:
                      "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                  }}
                  size="md"
                  radius={0}
                  // error="Please provide a username."
                />

                <PasswordInput
                  placeholder="New Password"
                  classNames={{
                    input:
                      "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                  }}
                  size="md"
                  radius={0}
                  // error="Please provide a username."
                />
              </div>
              <div className="grid grid-cols- gap-3">
                <div className="flex justify-end">
                  <Button
                    radius={0}
                    className="!bg-titan-red !px-2 md:!px-4 text-white">
                    Cancel
                  </Button>
                  <Button
                    radius={0}
                    className="!bg-titan-blue !px-2 md:!px-4 text-white">
                    Update
                  </Button>
                </div>
              </div>
            </div>
            <Divider />
            <div className="space-y-3">
              <div className="full space-y-3">
                <label
                  htmlFor="date"
                  className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
                  Privacy
                </label>
                <div className="space-y-2">
                  {privacy.map((item, id) => (
                    <Checkbox
                      key={id}
                      label={item}
                      className="dark:text-gray-500"
                    />
                  ))}
                </div>
              </div>
              <div className="full space-y-3">
                <label
                  htmlFor="date"
                  className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
                  Notifications
                </label>
                <div className="space-y-2">
                  {notification.map((item, id) => (
                    <Checkbox
                      key={id}
                      label={item}
                      className="dark:text-gray-500"
                    />
                  ))}
                </div>
              </div>
              <div className=" flex justify-end">
                <Button
                  radius={0}
                  className="!bg-titan-blue text-white">
                  Update
                </Button>
              </div>
            </div>
            <Divider />
            <UserInfo />
            <Divider />
            <PoliticalInfo />
          </div>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 3 }}
          classNames={{
            col: "hidden lg:block",
          }}
          className="!py-10">
          <SideTab />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default AccountOption;
