import { Button, Grid, NumberInput, Select } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const AccountVerification = () => {
  const features = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.2898 3.85996L1.81978 18C1.64514 18.3024 1.55274 18.6453 1.55177 18.9945C1.55079 19.3437 1.64127 19.6871 1.8142 19.9905C1.98714 20.2939 2.2365 20.5467 2.53748 20.7238C2.83847 20.9009 3.18058 20.9961 3.52978 21H20.4698C20.819 20.9961 21.1611 20.9009 21.4621 20.7238C21.7631 20.5467 22.0124 20.2939 22.1854 19.9905C22.3583 19.6871 22.4488 19.3437 22.4478 18.9945C22.4468 18.6453 22.3544 18.3024 22.1798 18L13.7098 3.85996C13.5315 3.56607 13.2805 3.32308 12.981 3.15444C12.6814 2.98581 12.3435 2.89722 11.9998 2.89722C11.656 2.89722 11.3181 2.98581 11.0186 3.15444C10.7191 3.32308 10.468 3.56607 10.2898 3.85996Z"
            stroke="#FFD700"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 9V13"
            stroke="#FFD700"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 17H12.01"
            stroke="#FFD700"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "Upload videos and use livestreaming",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 6L6 18"
            stroke="#EB2626"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#EB2626"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "Make money and cash out your earnings",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.2898 3.85996L1.81978 18C1.64514 18.3024 1.55274 18.6453 1.55177 18.9945C1.55079 19.3437 1.64127 19.6871 1.8142 19.9905C1.98714 20.2939 2.2365 20.5467 2.53748 20.7238C2.83847 20.9009 3.18058 20.9961 3.52978 21H20.4698C20.819 20.9961 21.1611 20.9009 21.4621 20.7238C21.7631 20.5467 22.0124 20.2939 22.1854 19.9905C22.3583 19.6871 22.4488 19.3437 22.4478 18.9945C22.4468 18.6453 22.3544 18.3024 22.1798 18L13.7098 3.85996C13.5315 3.56607 13.2805 3.32308 12.981 3.15444C12.6814 2.98581 12.3435 2.89722 11.9998 2.89722C11.656 2.89722 11.3181 2.98581 11.0186 3.15444C10.7191 3.32308 10.468 3.56607 10.2898 3.85996Z"
            stroke="#FFD700"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 9V13"
            stroke="#FFD700"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 17H12.01"
            stroke="#FFD700"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "Leave comments on videos",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.2898 3.85996L1.81978 18C1.64514 18.3024 1.55274 18.6453 1.55177 18.9945C1.55079 19.3437 1.64127 19.6871 1.8142 19.9905C1.98714 20.2939 2.2365 20.5467 2.53748 20.7238C2.83847 20.9009 3.18058 20.9961 3.52978 21H20.4698C20.819 20.9961 21.1611 20.9009 21.4621 20.7238C21.7631 20.5467 22.0124 20.2939 22.1854 19.9905C22.3583 19.6871 22.4488 19.3437 22.4478 18.9945C22.4468 18.6453 22.3544 18.3024 22.1798 18L13.7098 3.85996C13.5315 3.56607 13.2805 3.32308 12.981 3.15444C12.6814 2.98581 12.3435 2.89722 11.9998 2.89722C11.656 2.89722 11.3181 2.98581 11.0186 3.15444C10.7191 3.32308 10.468 3.56607 10.2898 3.85996Z"
            stroke="#FFD700"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 9V13"
            stroke="#FFD700"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 17H12.01"
            stroke="#FFD700"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "Vote for videos and comments",
    },
  ];
  return (
    <div className="p-4 lg:p-8 dark:text-white">
      <Grid
        justify="space-between"
        classNames={{
          root: "gap-3 md:p-4 lg:p-6",
        }}>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 9 }}
          classNames={{
            col: "",
          }}>
          <div className="space-y-6">
            <h1 className="font-bold text-xl text-titan-blue">
              ACCOUNT VERIFICATION
            </h1>
            <div>
              <p className="font-bold">
                Acount Status:{" "}
                <span className="text-titan-red-dark text-lg">
                  NOT VERIFIED
                </span>
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
                Some features may be limited or unavailable:
              </h2>
              <ul className="max-w-md space-y-3 text-gray-500 list-inside dark:text-gray-400">
                {features.map(({ icon, name }, id) => (
                  <li
                    className="flex gap-2 items-center"
                    key={id}>
                    {icon}
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h1 className="font-bold text-lg">Add phone number:</h1>
              <div className="flex gap-2 items-center">
                <p>Country Code: </p>
                <Select
                  classNames={{
                    input:
                      "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                    dropdown:
                      "dark:border-gray-700 dark:bg-rumble-content-dark dark:text-white",
                    option: "hover:!bg-gray-700",
                  }}
                  size="md"
                  placeholder="Country code"
                  data={["React", "Angular", "Vue", "Svelte"]}
                />
              </div>
              <div className="flex gap-2 items-center">
                <p>Phone number (without country code): </p>
                <NumberInput
                  placeholder="Zip Code"
                  classNames={{
                    input:
                      "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                    controls: "!hidden",
                  }}
                  size="md"
                  radius={0}
                  // error="Please provide a username."
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                <Button
                  className="!bg-titan-blue text-white"
                  radius={0}>
                  Mobile Phone: 📱 Text Me
                </Button>
                <Button
                  className="!bg-titan-blue text-white"
                  radius={0}>
                  Landline or Mobile : ☎️ Call Me
                </Button>
              </div>

              <p className="font-bold text-lg text-titan-blue">
                NOTE: Only one account at a time can be verified with the same
                number.
              </p>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 3 }}
          classNames={{
            col: "hidden lg:block",
          }}>
          <SideTab />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default AccountVerification;
