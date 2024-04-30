import { Divider } from "@mantine/core";
import VideoCard from "../../components/card/videoCard";
import v2 from "../../assets/v2.png";

const Library = () => {
  return (
    <div className="dark:text-white">
      <div className="w-full p-4 py-10">
        <h1 className="font-bold text-2xl">Watch History</h1>
        {/* <p>No videos in Watch History.</p> */}
        <VideoCard videoLink={v2} />
      </div>

      <Divider />

      <div className="w-full p-4 py-10">
        <h1 className="font-bold text-2xl">Watch Later</h1>
        <p>No videos in Watch History.</p>
      </div>

      <Divider />

      <div className="w-full p-4 py-10">
        <h1 className="font-bold text-2xl">Playlists</h1>
        <p>No videos in Watch History.</p>
      </div>

      <Divider />
    </div>
  );
}

export default Library