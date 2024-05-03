import { Link } from "react-router-dom";

import {
  Button,
  Checkbox,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";

const PoliticalInfo = () => {
  return (
    <>
      <div className="flex justify-between">
        <label
          htmlFor="date"
          className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
          Political Donation Info
        </label>
        <Button
          radius={0}
          className="!bg-titan-red text-white">
          Clear Form
        </Button>
      </div>
      <p className="text-md">
        Federal law requires campaigns to use their best efforts to collect
        certain information for each individual whose aggregate contributions
        exceed $200 in a calendar year. Please complete this form before
        contributing. All information provided will be shared with the recipient
        of a contribution.
      </p>
      <div className="space-y-4">
        <div className="grid grid-col-1 md:grid-cols-2 gap-3">
          <TextInput
            placeholder="First Name"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
          <TextInput
            placeholder="Last Name"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
        </div>
        <div className="grid gap-3">
          <TextInput
            placeholder="Email Address"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
          <TextInput
            placeholder="Mailing Address"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 gap-3">
          <TextInput
            placeholder="City"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
          <TextInput
            placeholder="State"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 gap-3">
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

          <Select
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              dropdown:
                "dark:border-gray-700 dark:bg-rumble-content-dark dark:text-white",
              option: "hover:!bg-gray-700",
            }}
            size="md"
            placeholder="Country"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 gap-3">
          <TextInput
            placeholder="Employer"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
          <TextInput
            placeholder="Occupation"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
        </div>

        <Checkbox
          label={
            <div className="space-y-2">
              <p>By checking this box, I certify:</p>
              <p>
                {" "}
                I am a U.S. citizen or lawfully admitted permanent resident
                (i.e., green card holder);
              </p>
              <p>
                This contribution is made from my own funds, and funds are not
                being provided to me by another person or entity for the purpose
                of making this contribution;
              </p>
              <p>
                I am making this contribution with my own personal credit card
                and not with a corporate or business credit card or a card
                issued to another person;
              </p>
              <p>
                I am at least eighteen years old. I am not, nor am I making this
                contribution on behalf of, a corporation, labor organization,
                national bank, foreign national without a green card, a federal
                contractor, or any other federally impermissible source; and
              </p>
              <p>
                I consent to{" "}
                <Link
                  to="/"
                  className="font-bold text-titan-blue">
                  Titan’s Website Terms and Conditions of Use and Agency
                  Agreement and Titan Privacy Policy
                </Link>
                .
              </p>
            </div>
          }
          className="dark:text-gray-500"
        />

        <div className="flex justify-end">
          <Button
            radius={0}
            className="!bg-titan-blue text-white">
            Update
          </Button>
        </div>

        <div className="space-y-4">
          <label
            htmlFor="date"
            className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
            Political Donation Info
          </label>

          <p className="lg:w-[60%]">
            Locals makes it simple for creators to start a subscription based
            community and make money directly from their supports.
          </p>

          <div className="border p-3 lg:w-[25%]">
            <Button className="!bg-titan-blue">CONNECT COMMUNITY</Button>
          </div>

          <label
            htmlFor="date"
            className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
            Close Titan Account
          </label>

          <p>
            You can{" "}
            <span className="text-titan-blue font-bold">
              {" "}
              close your account
            </span>{" "}
            at any time. This will make ALL your Titan content unavailable to
            you and to other people.
          </p>
        </div>
      </div>
    </>
  );
};

export default PoliticalInfo;
