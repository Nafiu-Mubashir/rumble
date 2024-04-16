import Button from "../../components/button";
import CreatorCard from "../../components/card/creatorCard";
import CategoryCard from "../../components/card/categoryCard";
import VideoCard from "../../components/card/videoCard";
import { useContext } from "react";
import { SlideContext } from "../../context/sidebarCtx";
import { Divider } from "@mantine/core";
import TabPane from "./components/tab-panes";

const Home = () => {
  const { isOpen } = useContext(SlideContext);
  return (
    <div className="container m-auto dark:text-white">
      <div className="fixed container bg-white dark:bg-rumble-dark top-[3.1rem] md:top-[3.5rem] lg:top-[3.5rem] w-full h-[3.75rem] z-10 flex items-center gap-2 px-2">
        <TabPane />
      </div>
      <div className="relative inline-block p-4 w-full mt-10">
        <div className="lg:p-3 space-y-6">
          <div id="barstrool">
            <div className="flex justify-between items-center lg:mb-5">
              <h3 className="font-bold">Barstool Sport</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div id="categories">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Top Live Categories</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>
            <div
              className={`${isOpen} grid overflow-y-auto grid-cols-6 gap-4 lg:grid-cols-8`}
            >
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div id="picks">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Picks</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="live" />
              <VideoCard status="live" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div id="creators">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Recommended Creators</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <CreatorCard />
              <CreatorCard />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="gaming">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Gaming</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="live" />
              <VideoCard status="live" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="live">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Live</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="live" />
              <VideoCard status="live" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="playlist">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Featured Playlist</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard playlist="playlist" />
              <VideoCard playlist="playlist" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="sports">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Sports</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="" />
              <VideoCard status="" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="viral">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Viral</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="" />
              <VideoCard status="" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="powerSlap">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Power Slap</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="upcoming" />
              <VideoCard status="" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="podcast">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Podcast</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="Live" />
              <VideoCard status="Live" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="finance">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Finance</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="upcoming" />
              <VideoCard status="" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="leaderboard">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Leaderboard</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard leaderboarder="leaderboard" />
              <VideoCard leaderboarder="leaderboard" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="vlogs">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Vlogs</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="" />
              <VideoCard status="upcoming" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="news">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">News</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="live" />
              <VideoCard status="live" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="science">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Science</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="upcoming" />
              <VideoCard status="" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="music">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Music</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="live" />
              <VideoCard status="upcoming" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="entertainment">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Entertainment</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="live" />
              <VideoCard status="live" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />

          <div className="" id="cooking">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Cooking</h3>
              <Button
                value="View all"
                classes="hover:bg-rumble-green-dark border border-rumble-green py-1 md:py-1 lg:py-2 hidden md:block lg:block"
              />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <VideoCard status="live" />
              <VideoCard status="" />
            </div>

            <Button
              value="View all"
              classes="w-full block md:hidden lg:hidden hover:bg-rumble-green-dark border border-rumble-green py-2 md:py-2 block mx-auto mt-3"
            />
          </div>
          <Divider my="md" />
        </div>
      </div>
    </div>
  );
};

export default Home;
