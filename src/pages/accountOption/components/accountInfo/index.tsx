import { Button, NumberInput, Select, TextInput } from "@mantine/core";

const AccountInfo = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-col-1 md:grid-cols-2 gap-3">
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
            placeholder="Street Adress"
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
            placeholder="Street Adress 2"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
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
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 gap-3">
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
          <TextInput
            placeholder="Postal/Zip code"
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

          <NumberInput
            placeholder="Phone"
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
        <div className="full">
          <label
            htmlFor="date"
            className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
            PAYMENT DETAILS
          </label>
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-col-1 md:grid-cols-2 gap-3">
          <TextInput
            placeholder="Paypal"
            classNames={{
              input:
                "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
            }}
            size="md"
            radius={0}
            // error="Please provide a username."
          />
          <TextInput
            placeholder="Paypal Email Address"
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

export default AccountInfo;
