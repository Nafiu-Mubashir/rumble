import { Button } from "@mantine/core";

const StaticStreamKey = () => {
  return (
    <div className="space-y-4 p-3">
      <p>No videos found matching that criteria.</p>
      <Button
        radius={0}
        className="!bg-titan-blue text-white">
        Create New Static Stream Key
      </Button>
    </div>
  );
}

export default StaticStreamKey