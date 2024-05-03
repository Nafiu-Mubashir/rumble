import {
  Button,
  Checkbox,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="w-[90%] mx-auto space-y-8 py-10">
      <h3 className="dark:text-gray-400 font-semibold text-2xl">
        REGISTER WITH RUMBLE
      </h3>

      <div className="space-y-3">
        <h3 className="dark:text-gray-400 font-semibold text-2xl">
          FREE ACCOUNT REGISTRATION
        </h3>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
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
            <TextInput
              placeholder="Username"
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
              // error="Please provide a username."
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <PasswordInput
              placeholder="Password"
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
              // error="Please provide a username."
            />
            <PasswordInput
              placeholder="Re-type Password"
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
              // error="Please provide a username."
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <TextInput
              placeholder="E-mail Address"
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
              // error="Please provide a username."
            />
            <TextInput
              placeholder="Re-type E-mail Address"
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
              // error="Please provide a username."
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Select
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                dropdown:
                  "dark:border-gray-700 dark:bg-rumble-content-dark dark:text-white",
                option: "hover:!bg-gray-700",
              }}
              size="md"
              placeholder="Country*"
              data={["React", "Angular", "Vue", "Svelte"]}
            />
          </div>
          <div className="full">
            <label
              htmlFor="date"
              className="block mb-1 font-medium text-gray-900 dark:text-gray-400 text-xl">
              Birthday
            </label>
            <input
              type="date"
              name=""
              id=""
              className="dark:bg-rumble-content-dark  h-full w-1/2 py-[0.4rem] dark:text-gray-400 border dark:border-gray-700 px-4 border-gray-200 focus:ring-gray-200 focus:border-gray-200"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="dark:text-gray-400 font-semibold text-2xl">
          OPTIONAL FIELDS
        </h3>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <TextInput
              placeholder="Referrer"
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
              // error="Please provide a username."
            />
          </div>
          {/* <div className="grid grid-cols-2 gap-3"> */}
          <TextInput
            placeholder="Addreess"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
          <TextInput
            placeholder="Addreess (Suite, unit, floor, etc.)"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
          {/* </div> */}
          <div className="grid grid-cols-2 gap-3">
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
              placeholder="State/Province"
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
              // error="Please provide a username."
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <TextInput
              placeholder="Postal Code"
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
              // error="Please provide a username."
            />

            <NumberInput
              placeholder="Phone Number"
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
        </div>
      </div>

      <div>
        <Checkbox
          defaultChecked
          label={
            <>
              By creating an account with titan and checking this box, you are
              providing your written agreement with, and consent to, titan
              Website Terms and Conditions of Use and Agency Agreement and Titan
              Privacy Policy, respectively. Titan Website Terms and Conditions
              of Use and Agency Agreement can be found here:
              <Link
                to="https://titan.com/s/terms"
                className="px-1">
                https://titan.com/s/terms
              </Link>
              , and Titan Privacy Policy can be found here:
              <Link
                to="https://titan.com/s/privacy"
                className="px-1">
                https://titan.com/s/privacy
              </Link>
              .
            </>
          }
          className="dark:text-gray-500"
        />
      </div>

      <Button
        type="submit"
        radius={"lg"}
        size="md"
        className="!bg-rumble-green-dark !rounded-full"
        // loading
      >
        Register
      </Button>
    </div>
  );
};

export default Registration;
