import { Button } from "@mantine/core";

const API = () => {
  return (
    <div className="space-y-4 p-3">
      <div className="p-4 border bg-white dark:bg-rumble-dark dark:text-white space-y-3">
        <p>
          The below URLs will provide API data for overlays in your live
          streaming software.
        </p>
        <p>
          It will pull data for all your active and scheduled livestreams. Only
          share these URLs with trusted third parties.
        </p>
        <p>For more information on how the APIs work click here.</p>
      </div>
      <div className="p-4 border bg-white dark:bg-rumble-dark dark:text-white space-y-3">
        <p>{"USER"} Username</p>

        <Button
          radius={0}
          className="!bg-titan-blue text-white">
          Generate API Key
        </Button>
      </div>
    </div>
  );
}

export default API