import Button from "../../components/button";
import CreatorCard from "../../components/card/creatorCard";
import CategoryCard from "../../components/card/categoryCard";
import VideoCard from "../../components/card/videoCard";
import { useContext } from "react";
import { SlideContext } from "../../context/sidebarCtx";
import { Divider } from "@mantine/core";

const Home = () => {
  const { isOpen } = useContext(SlideContext);
  return (
    <div className="container m-auto">
      <div className="fixed container bg-white top-[3.5rem] w-full h-[3.75rem] z-10 flex items-center gap-2 px-2">
        <Button
          value="Barstool"
          classes="bg-gray-100 text-[0.813rem] font-normal py-1 hover:bg-gray-400 hover:text-white"
        />
        <Button
          value="Picks"
          classes="bg-gray-100 text-[0.813rem] font-normal py-1 hover:bg-gray-400 hover:text-white"
        />
        <Button
          value="My Feed"
          classes="bg-gray-100 text-[0.813rem] font-normal py-1 hover:bg-gray-400 hover:text-white"
        />
      </div>
      <div className="relative inline-block p-4 w-full mt-10">
        <div className="lg:p-3 space-y-6">
          <div>
            <div className="flex justify-between items-center lg:mb-5">
              <h3 className="font-bold">Barstool Sport</h3>
              <Button
                value="View all"
                classes="hover:bg-gray-100 border border-green-200 py-1 md:py-1"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </div>
          </div>
          <Divider my="md" />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Top Live Categories</h3>
              <Button
                value="View all"
                classes="hover:bg-gray-100 border border-green-200 py-1 md:py-1"
              />
            </div>
            <div
              className={`${
                isOpen ? "gap-2" : "gap-4"
              } "grid grid-cols-9 overflow-auto lg:overflow-0 py-"`}
            >
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </div>
          </div>
          <Divider my="md" />

          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Picks</h3>
              <Button
                value="View all"
                classes="hover:bg-gray-100 border border-green-200 py-1 md:py-1"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="live" />
              <VideoCard status="live" />
              <VideoCard status="live" />
              <VideoCard status="live" />
            </div>
          </div>
          <Divider my="md" />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Recommended Creators</h3>
              <Button
                value="View all"
                classes="hover:bg-gray-100 border border-green-200 py-1 md:py-1"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <CreatorCard />
              <CreatorCard />
              <CreatorCard />
              <CreatorCard />
            </div>
          </div>
          <Divider my="md" />

          <div className="">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Featured Playlist</h3>
              <Button
                value="View all"
                classes="hover:bg-gray-100 border border-green-200 py-1 md:py-1"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard playlist="playlist" />
              <VideoCard playlist="playlist" />
              <VideoCard playlist="playlist" />
              <VideoCard playlist="playlist" />
            </div>
          </div>
          <Divider my="md" />

          <div className="">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Upcoming</h3>
              <Button
                value="View all"
                classes="hover:bg-gray-100 border border-green-200 py-1 md:py-1"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="upcoming" />
              <VideoCard status="upcoming" />
              <VideoCard status="upcoming" />
              <VideoCard status="upcoming" />
            </div>
          </div>
          <Divider my="md" />
        </div>
      </div>
    </div>
  );
};

export default Home;
